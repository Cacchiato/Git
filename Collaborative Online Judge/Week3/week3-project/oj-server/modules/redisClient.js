var redis = require('redis');

//only one client is created
var client = redis.createClient();

//only call the set and get functions in our owned wrapper
//1) store value
function set(key, value, callback) {
    //err is the 1st argument, so that we don't forget to handle the error
    client.set(key, value, function(err, res) {
        if(err) {
            console.log(err);
            return;
        }
        callback(res);
    });
}

//2) get value
function get(key, callback) {
    client.get(key, function(err, res) {
        if(err) {
            console.log(err);
            return;
        }
        callback(res);
    });
}

//3) set expiration time - only store the keys for a limitied period of time
function expire(key, timeInSeconds) {
    client.expire(key, timeInSeconds);
}

//4) quit redis
function quit() {
    client.quit();
}

//export the functions
module.exports = {
    get: get,
    set: set,
    expire: expire,
    quit: quit,
    redisPrint: redis.print  //directly export the function in redis
}