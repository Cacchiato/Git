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

        //socket.on connection
        let participants = collaborations[sessionId]['participants'];
        let index = participants.indexOf(socket.id);
        console.log("hello-connection", "Greeting from " + socket.id + "in Problem " + sessionId);
        for(let i = 0; i < participants.length; i++) {
            if(index != i) {
                let feedback = socket.id + " enters into Promblem " + sessionId;
                io.to(participants[i]).emit("hello-connection", feedback);
            }
        }
    
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

        socket.on('disconnect', () => {
            let sessionId = socketIdToSessionId[socket.id];
            let str = 'socket' + socket.id + ' disconnnected from Problem ' + sessionId;
            console.log(str);

            if(sessionId in collaborations) {
                let participants = collaborations[sessionId]['participants'];
                let index = participants.indexOf(socket.id);
                if(index >= 0) {
                    participants.splice(index, 1);
                }
                
                let feedback = socket.id + " exits from Promblem " + sessionId;;
                for(let i = 0; i < participants.length; i++) {
                    io.to(participants[i]).emit("disconnect", feedback);
                }
            }
        });
        
        //count participants
        participants = collaborations[sessionId]['participants'];
        let num = participants.length;
        for(let i = 0; i < participants.length; i++) {
            io.to(participants[i]).emit("all-participants", participants);
        }

       
       
    });
}