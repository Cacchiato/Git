# Week2 Lab 1

## Server Side

### Step 1 - Create the Server Side project

```shell
$ cd Week2
$ mkdir oj-server
$ cd oj-server
$ npm init
```
The `npm init` will ask you a bunch of questions and interactively create a `package.json` file for you. 

### Step 2 - Create the `.gitignore` file
Add `/node_modules` in the `.gitignore` file

### Step 3 - Install Express Web Framework

```shell
$ npm i express
```
express is added in `dependencies` in the `package.json` file.
>1) [Express](https://expressjs.com/) is a popular unopinionated web framework, written in JavaScript and hosted within the node.js runtime environment. 
>2) [Express 4.x API](https://expressjs.com/en/4x/api.html)
>3) Express Middleware - [Writing Middleware](https://expressjs.com/en/guide/writing-middleware.html) and [Using Middleware](https://expressjs.com/en/guide/using-middleware.html)
>4) [Express Web Framework MDN](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)

### Step 4 - Create `server.js`

```javascript
//Create an Express application
//The express() function is a top-level function exported by the express module.
//The keyword require is used in Node.js to import modules
const express = require('express');
const app = express();
```
References
>1) [Express Hello World Example](https://expressjs.com/en/starter/hello-world.html)
>2) [Node.js modules: require, exports, imports and beyond](http://adrianmejia.com/blog/2016/08/12/Getting-started-with-Node-js-modules-require-exports-imports-npm-and-beyond/)
>3) [Node.js v9.11.1 Documentation](https://nodejs.org/api/documentation.html)

### Step 5 - Start the server
>1) install `nodemon`

```shell
$ npm i -g nodemon
```
>2) use `nodemon` to start the server

```shell
$ nodemon server.js
```
>3) define `npm start` as `nodemon server.js`
- open `package.json`

```json
"scripts": {
	"start": "nodemon server.js"
}
```
>4) use `npm start` to start the server

### Step 6 - Setup MongoDB Environment

#### Install mongoose
[mongoose](http://mongoosejs.com/docs/guide.html) - elegant mongodb object modeling for node.js

```shell
$ npm install mongoose
```

#### Create Database in mLab
[mLab](https://mlab.com/) - use mLab as the cloud MongoDB service

>1) Sign up an mLab account

>2) Create a new database
- `+ Create new` --> `Cloud Provider` --> `Plan Type` --> `Region` --> Set `DATABASE NAME`: `problems`
- db `problems` --> `Users` --> set `<dbuser>` --> set `<dbpassword>`
- db `problems` --> `Add collection` --> collection name is `problemmodels`--> `Add document`
- add five json format problems in document 

>3) Connect to mLab
- use a mongodb driver via a standard MongoDB URI to connect to mLab
- URI : `mongodb://<dbuser>:<dbpassword>@ds237379.mlab.com:37379/problems` 
- setup the connection in `server.js` 
 
```javascript
const mongoose = require('mongoose');
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds237379.mlab.com:37379/problems');
```

### Step 7 - Create Problem Model

`/models/problemModel.js`

>1) Import mongoose

```javascript
//1) import mongoose
const mongoose = require(`mongoose`);
```

>2) Create the schema of the Problem
- Everything in Mongoose starts with a `Schema`. 
- Each schema maps to a MongoDB `collection` and defines the `shape` of the documents within that collection.

```javascript
//2) create the mongoose schema with four properties
const ProblemSchema = mongoose.Schema({
	id: Number,
	name: String,
	desc: String,
	difficulty: String
});
```
>3) Compile the schema into a model
- `Models` are constructors compiled from `Schema` definitions.
- Instances of these models represent `documents` which can be saved and retrieved from our `database`. 
- All document `creation` and `retrieval` from the `database` is handled by these `models`.

```javascript
const ProblemModel = mongoose.model('ProblemModel', ProblemSchema);
```

### Step 8 - Create Data Service
`/services/problemService.js`

#### Import Problem Model

```javascript
const ProblemModel = require('../models/problemModel');
```

#### Data Services

>1) Service 1 - fetch all problems from database

```javascript
//returned a Promise 
const getProblems = function() {
	return new Promise((resolve, reject) => {
		ProblemModel.find({}, function(err, problems)) {
			//resolve the promise
		});
	});
};
```

>2) Service 2 - fetch one problem by `id` from database

```javascript
//returned a Promise 
const getProblem = function(id) {
	return new Promise((resolve, reject) => {
		ProblemModel.findOne({id: id}, function(err, problem)) {
			//resolve the promise
		});
	});
};
```

>3) Service 3 - add a new problem

```javascript
//returned a Promise 
const addProblem = function(newProblem) {
	return new Promise((resolve, reject) => {
		ProblemModel.findOne({name: newProblem.name}, function(err, data)) {
			//resolve the promise
		});
	});
};
```

### Step 9 - Create RESTful API

- In the `Data Service` of `oj-client`, we provide `getProblems()`, `getProblem(id)` and `addProblem(problem)` services. Therefore, in the server side, we also need to provide these services.
- All the problem data should store in back-end database.
- Server provides API that allow front-end to retrieve data from the database.

`/routes/rest.js`

#### Import Router-level Middleware

```javascript
const express = require('express'); //import express package
const router = express.Router(); //import router

//business logic is in service
//router helps us to find which service we need
const problemService = require('../services/problemService');
```

#### Use Routing to handle client requests

- [Express Routing](https://expressjs.com/en/guide/routing.html) 
  	- `Routing` refers to determining how an application responds to a client request to a particular `endpoint`, which is a URI (or path) and a specific HTTP request method. 
  	- Route Definition Structure - `app.METHOD(PATH, HANDLER)`
- Use callback function in routing (`Promise.then()`)
	- Since node.js is non-blocking IO, when ever IO happens, it will create another thread to handle IO. 
	- When the response is returned, we should use callback function to handle the response.

>1) Handle `GET-all-problems` request

```javascript
router.get('/problems', function(req, res) {
	problemService.getProblems()
		.then(problems => res.json(problems)); 
});
```
>2) Handle `GET-problem-by-id` request

```javascript
router.get('/problems/:id', function(req, res) {
	const id = req.params.id; //read in id from request
	problemService.getProblems(+id)
		.then(problem => res.json(problem)); 
});
```

>3) Handle `POST-new-problem` request
- POST request includes a body which is in JSON format, we need to use [body-parser](https://www.npmjs.com/package/body-parser) to parse the request body.

```shell
$ npm i body-parser
```

```javascript
//import json-parser for parsing the request into json format
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

router.post('/problems', jsonParser, function(req, res) {
	problemService.addProblem(req.body)
		.then(problem => { res.json(problems); }, (error) => { res.status(400).send('Problem already exists!'); }); 
});
```

### Step 10 - Create WebSocket


### Step 11 - server.js
- connect oj-client with oj-server