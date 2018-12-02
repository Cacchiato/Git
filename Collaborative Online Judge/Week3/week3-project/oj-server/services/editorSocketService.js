//Week3
var redisClient = require('../modules/redisClient');
const TIMEOUT_IN_SECONDS = 3600;

module.exports = function(io) {
    var collaborations = {};
    var socketIdToSessionId = {};

    //set the Redis session_path for our appliaction
    var sessionPath = '/temp_sessions/';

    io.on('connection', (socket) => {
        let sessionId = socket.handshake.query['sessionId']; //sessionId is the problemId
        socketIdToSessionId[socket.id] = sessionId;

        if(sessionId in collaborations) {
            collaborations[sessionId]['participants'].push(socket.id);
        } else {//if the sessionId cannot be found in the memory of NodeJS
            //first check redis
            redisClient.get(sessionPath + "/" + sessionId, function(data) {
                if(data) {//Redis has stored the sessionId within 3600 seconds
                    console.log("session terminated previously, pulling back from Redis");
                    collaborations[sessionId] = {
                        'cachedInstructions': JSON.parse(data),
                        'participants': []
                    };
                } else { //Redis does not have the sessionId
                    collaborations[sessionId] = {
                        'cachedInstructions': [], //empty - no instructions yet
                        'participants': []
                    };
                }
                collaborations[sessionId]['participants'].push(socket.id);
            });
        }
        
        socket.on('change', delta => {
            let sessionId = socketIdToSessionId[socket.id];
            console.log("change " + sessionId + " " + delta);
            
            if(sessionId in collaborations) {
                //store input_instructions when participants are editing the problem
                collaborations[sessionId]['cachedInstructions'].push(["change", delta, Date.now()]);

                let participants = collaborations[sessionId]['participants'];

                for(let i = 0; i < participants.length; i++) {
                    if(socket.id != participants[i]) {
                        io.to(participants[i]).emit("change", delta);
                    }
                }
            } else {
                console.log("Could not find socket id in collaborations.");
            }
        });

        socket.on('restoreBuffer', () => {
            let sessionId = socketIdToSessionId[socket.id];
            console.log('restore buffer for session: ' + sessionId + ', socket: ' + socket.id);

            if(sessionId in collaborations) {
                let instructions = collaborations[sessionId]['cachedInstructions'];
                for(let i = 0; i < instructions.length; i++) {
                    socket.emit(instructions[i][0], instructions[i][1]);
                }
            } else {
                console.log("warning: could not find any collabotation in this session!")
            }
        });

        socket.on('disconnect', () => {
            let sessionId = socketIdToSessionId[socket.id];
            console.log('socket: ' + socket.id + ' disconnect from session ' + sessionId);

            let foundAndRemove = false;
            if(sessionId in collaborations) {
                let participants = collaborations[sessionId]['participants'];
                let index = participants.indexOf(socket.id);
                console.log("index = " + index);
                if(index >= 0) {
                    participants.splice(index, 1); //remove the leaving socket.id from participants
                    foundAndRemove = true;

                    //if the the leaving socket.id is the last user left 
                    //store the instructions in Redis within 3600s
                    if(participants.length == 0) {
                        console.log('last participant in collaboration, commiting to redis, remove from memory');
                        
                        let key = sessionPath + "/" + sessionId;
                        let value = JSON.stringify(collaborations[sessionId]['cachedInstructions']);

                        redisClient.set(key, value, redisClient.redisPrint);
                        redisClient.expire(key, TIMEOUT_IN_SECONDS);

                        delete collaborations[sessionId];
                    }
                }
            }

            if(!foundAndRemove) {
                console.log("warning: could not tie socket id to any collaboration");
            }
            console.log("hello");
            console.log(collaborations);
        });
    });
}

/* Week 2
module.exports = function(io) {
    var collaborations = {};
    var socketIdToSessionId = {};

    io.on('connection', (socket) => {
        // console.log(socket);
        // var message = socket.handshake.query['message'];
        // console.log(message);

        let sessionId = socket.handshake.query['sessionId'];
        socketIdToSessionId[socket.id] = sessionId;

        if(!(sessionId in collaborations)) {
            collaborations[sessionId] = {
                'participants': []
            };
        }
        collaborations[sessionId]['participants'].push(socket.id);

        socket.on('change', delta => {
            let sessionId = socketIdToSessionId[socket.id];
            console.log("change " + sessionId + " " + delta);
            
            if(sessionId in collaborations) {
                let participants = collaborations[sessionId]['participants'];

                for(let i = 0; i < participants.length; i++) {
                    if(socket.id != participants[i]) {
                        io.to(participants[i]).emit("change", delta);
                    }
                }
            } else {
                console.log("Could not find socket id in collaborations.");
            }
        });
    });
} */