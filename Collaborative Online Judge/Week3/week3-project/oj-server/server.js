//mongoDB
const mongoose = require("mongoose");
mongoose.connect('mongodb://user:user@ds237379.mlab.com:37379/problems');

//Create an Express application
//The express() function is a top-level function exported by the express module.
const express = require('express');
const app = express();

const path = require('path');
const restRouter = require('./routes/rest');

//app.use(path, callbacks) mounts the specified middleware function at the specified path
//the middleware function is executed when the base of the reqeusted path matches path
app.use('/api/v1', restRouter); //support api
app.use(express.static(path.join(__dirname, '../public/'))); //support static file
app.use((req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, '../public/')}); //default page
});

const http = require('http'); 
const ports = [3000, 3001, 3002];
for(let i = 0; i < ports.length; i++) {
    let server = http.createServer(app);
    server.listen(ports[i]);
    server.on('listening', () => {
	console.log('Example app listening on port ' + ports[i]);
    });
    
    let socketIO = require('socket.io');
    var io = socketIO();
    var editorSocketService = require('./services/editorSocketService')(io);
    io.attach(server); //connect io with server
}


//Node.js as a Web Server
//Node.js has a built-in HTTP module which allows Node.js to transfer data over HTTP Protocol
/* const http = require('http'); 
const server = http.createServer(app); //create an HTTP server with Express application
server.listen(3000);
server.on('listening', onListening);
function onListening() { //listening call back
    console.log('Example app listening on port 3000!');
}
 */
//server-side socket.io
/* const socketIO = require('socket.io');
var io = socketIO();
var editorSocketService = require('./services/editorSocketService')(io); //function(io) {...}
io.attach(server); //connect io with server */

//app.listen(3000, () => console.log('Example app listening on port 3000!'));



