# Week 2

- [Quick Start](#quick-start)
	- [Built With](#built-with)
	- [Tools](#tools)
- [Demo of Running](#demo-of-running)
	- [Client Side](#client-side)
		- [Step 1. Setup the working environment in `Week 1`](#step-1-setup-the-working-environment-in-week-1)
		- [Step 2. Build the Client as Static File](#step-2-build-the-client-as-static-file)
	- [Server Side](#server-side)
		- [1. Create the server project](#1-create-the-server-project)
		- [2. Install Express Web Framework](#2-install-express-web-framework)
		- [3. Create the  `.gitignore` file](#3-create-the-gitignore-file)
		- [4. Create an Express application in `server.js`](#4-create-an-express-application-in-serverjs)
		- [5. Serve the static file build by client](#5-serve-the-static-file-build-by-client)
		- [6. Start the server](#6-start-the-server)
- [Project Structure](#project-structure)
	- [I. Use MongoDB as the Datastore](#i-use-mongodb-as-the-datastore)
		- [Server-side Data Service](#server-side-data-service)
			- [Setup MongoDB Environment](#setup-mongodb-environment)
			- [Create Problem Model](#create-problem-model)
			- [Create Data Services](#create-data-services)
				- [Service 1 - fetch all problems from database](#service-1---fetch-all-problems-from-database)
				- [Service 2 - fetch one problem by `id` from database](#service-2---fetch-one-problem-by-id-from-database)
				- [Service 3 - fetch problems by difficulty](#service-3---fetch-problems-by-difficulty)
				- [Service 4 - add a new problem](#service-4---add-a-new-problem)
				- [Service 5 - Modify a problem](#service-5---modify-a-problem)
			- [Create Restful APIs](#create-restful-apis)
				- [Handle `Get-all-problems` request](#handle-get-all-problems-request)
				- [Handle `Get-problem-by-id` request](#handle-get-problem-by-id-request)
				- [Handle `Get-problems-by-difficulty` request](#handle-get-problems-by-difficulty-request)
				- [Handle `Add-new-problem` request](#handle-add-new-problem-request)
				- [Handle `Modify-problem` request \(HW2-Q1\)](#handle-modify-problem-request-hw2-q1)
		- [Client-side Data Service](#client-side-data-service)
	- [II. Collaborative Editing](#ii-collaborative-editing)
		- [Client Side](#client-side-1)
			- [Create Collaboration Service](#create-collaboration-service)
			- [`editor` Component](#editor-component)
			- [`session` Component \(HW2-Q2\)](#session-components-hw2-q2)
		- [Server Side](#server-side-1)
			- [Create Socket Service](#create-socket-service)
			- [Setup socket connection](#setup-socket-connection)
	- [III. Search Feature in Navbar](#iii-search-feature-in-navbar)

## Quick Start

### Built With

- [Angular](https://angular.io/) 
- [Node.js](https://nodejs.org/en/)
- [Bootstrap](https://getbootstrap.com/)
- [jQuery](https://jquery.com/)
- [MongoDB](https://www.mongodb.com/)

### Tools
- Linux OS (VirtualBox)
- Visual Studio Code (IDE)
- [Postman](https://www.getpostman.com/)
- [mLab](https://mlab.com/)
- [mongoose](http://mongoosejs.com/)
- [Express](https://expressjs.com/)
- [socket.io](https://socket.io/)
- [Ace Editor](https://ace.c9.io/)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Angular CLI](https://cli.angular.io/)

## Demo of Running

### Client Side

#### Step 1. Setup the working environment in `Week 1`

#### Step 2. Build the Client as Static File

1. Change the `outDir` directory in `.angular-cli.json`
	* `outDir`tells the compiler the `output` directory for `build` results.
	* `rootDir` tells the compiler the `root` directory for the app.

```shell
$ cd Week2
$ mkdir public
```

```javascript
"apps": [
	"root": "src",
	"outDir": "../public"
]
```
2. Build `oj-client`
- All files will be saved to `oj-client/public` which is defined in `.angular-cli.json`
- The files under `oj-client/public` will be referenced by [server](#5-serve-the-static-file-build-by-client).

```shell
$ cd Week2/oj-client
$ ng build --watch
```

### Server Side 

#### 1. Create the server project
- `npm init` command will ask you a bunch of questions and interactively create a `package.json` file for you. 

```shell
$ cd Week2/oj-server
$ npm init
```

#### 2. Install Express Web Framework

```shell
$ cd Week2/oj-server
$ npm i express
```
#### 3. Create the  `.gitignore` file
- Add `/node_modules` in the `.gitignore` file

#### 4. Create an Express application in `server.js`
- Follow the [`Hello World Example`](https://expressjs.com/en/starter/hello-world.html)

```javascript
const express = require('express');
const app = express();
```

#### 5. Serve the static file build by client
- Use [`express.static`](https://expressjs.com/en/starter/static-files.html) built-in middleware to serve static files in Express

```javascript
const path = require('path');
app.use(express.static(path.join(__dirname, '../public')));
```

#### 6. Start the server
- `nodemon` has been installed globally in Week 1
- define `npm start` as `nodemon server.js` in `package.json`
- use `npm start` to launch the server

```javascript
//open package.json
"scripts": {
	"start": "nodemon server.js"
}
```

## Project Structure

### I. Use MongoDB as the Datastore

![image](https://github.com/zhewangjoe/BitTiger-CS503-1802/blob/CrazyDonut/Week2/img/1.png)

#### Server-side Data Service

##### Setup MongoDB Environment

1. Install mongoose

```shell
$ npm install mongoose
```

2. Create Database in mLab

3. Connect the Database in `server.js`

```javascript
const mongoose = require('mongoose');
mongoose.connect('mongodb://<dbuser>:<dbpassword>@db*****.mlab.com:*****/problems');
```
##### Create Problem Model

1. Import mongoose

```javascript
//1) import mongoose
const mongoose = require(`mongoose`);
```

2. Create the schema of the Problem

3. Compile the schema into a model

```javascript
const ProblemModel = mongoose.model('ProblemModel', ProblemSchema);
```
##### Create Data Services

###### Service 1 - fetch all problems from database

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
###### Service 2 - fetch one problem by `id` from database

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
###### Service 3 - fetch problems by difficulty

```javascript
//returned a Promise 
const getProblemsByDiff = function(difficulty) {
	return new Promise((resolve, reject) => {
		ProblemModel.find({difficulty:difficulty}, function(err, problems)) {
			//resolve the promise
		});
	});
};
```
###### Service 4 - add a new problem

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
###### Service 5 - Modify a problem

```javascript
//returned a Promise 
const modifyProblem = function(name) {
	return new Promise((resolve, reject) => {
		ProblemModel.findOne({name: name}, function(err, oldProblem)) {
			if(err) {
				reject('Cannot modify the old problem');
			} else {
				oldProblem.name = newProblem.name;
				oldProblem.desc = newProblem.desc;
				oldProblem.difficulty = newProblem.difficulty;
				oldProblem.save();
				resolve(oldProblem);
			}
		});
	});
};
```

##### Create Restful APIs

`/routes/rest.js`

###### Handle `Get-all-problems` request

```javascript
router.get('/problems', function(req, res) {
	problemService.getProblems()
		.then(problems => res.json(problems)); 
});
```

###### Handle `Get-problem-by-id` request

```javascript
router.get('/problems/:id', function(req, res) {
	const id = req.params.id; //read in id from request
	problemService.getProblems(+id)
		.then(problem => res.json(problem)); 
});
```

###### Handle `Get-problems-by-difficulty` request

```javascript
router.get('/problems/diff/:difficulty', function(req, res) {
	const difficulty = req.params.difficulty; //read in difficulty from request
	problemService.getProblemsByDiff(difficulty)
		.then(problems => res.json(problems)); 
});
```

###### Handle `Add-new-problem` request

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

###### Handle `Modify-problem` request (HW2-Q1)
- Modification is realized in back-end server, as the user in client side should not be able to modify a problem.
- Use `Postman`to test this feature - modify `4Sum`

![image](https://github.com/zhewangjoe/BitTiger-CS503-1802/blob/CrazyDonut/Week2/img/4.gif)

```javascript
router.put('/problems/:name', function(req, res) {
	const name = req.params.difficulty; //read in id from request
	problemService.modifyProblem(name, req.body)
		.then(problem => { res.json(problems); }, (error) => { res.send("Modification failed."); }); 
});
```

#### Client-side Data Service

Refactoring the data service 

* Use `httpClient` to fetch data from the server side via RESTful API
* Set the services as `Observable` or `Promise`

### II. Collaborative Editing
![image](https://github.com/zhewangjoe/BitTiger-CS503-1802/blob/CrazyDonut/Week2/img/2.png)

#### Client Side

##### Create Collaboration Service

1. Install socket.io

```shell
npm -i socket.io
```
2. Collaboration Service
 
>1) receive-change - `receiveChange(editor: any)`
>2) send-change - `change(delta: string)` with emitting signal `"change"`
>3) detect-connection - `helloConnection()` with detecting signal `"hello-connection"`
>4) detect-disconnection - `loseConnection()` with detecting signal `"disconnect"`
>5) display-participants - `showParticipants()` with detecting signal `all-participants`

##### `editor` Component

1. Create a new component `editor`

```shell
$ cd src/app/components
$ ng g c editor
```

2. Add `editor` to `problem-detail`

```html
<!-- problem-detail.component.html -->
<div class="hidden-xs col-sm-12 col-md-8">
	<app-editor></app-editor>
</div>
```

3. Install`Ace-editor`

```shell
$ cd oj-client
$ npm i ace-builds
```
4. Import `Ace-editor` in `.angular-cil.json`

5. `editor` Features
* Reset Editor - `resetEditor()`
* Set Language - `setLanguage(language: string)`
* Receive change from other users in the same problem - call `collaboration.receiveChange(editor: any)`
* Send change to other users in the same problem - call `collaboration.change(delta: string)`
* Submit the problem - `submit()`

##### `session` Component (HW2-Q2)

- The session component is used to display user-connection and user-disconnection from a problem
- It also can show the participants who are working on the same problem.
- UI support has not been finished, but we can use `Console` in `Chrome` to display these features.

![image](https://github.com/zhewangjoe/BitTiger-CS503-1802/blob/CrazyDonut/Week2/img/5.gif)

1. Create a `session` component

```shell
$ cd src/app/components
$ ng g c session
```

2. Features realized in `session`
* Detect user connection - call `collaboration.helloConnection()`
* Detect user disconnection - call `collaboration.loseConnection()`
* Display all participants of a problem - call `collaboration.showParticipants()`

#### Server Side

##### Create Socket Service 

Services provided in `sditorSocketService.js`
>1) detect-connection - emit the `socket.id` to other participants when a user joins
>2) detect-change - emit the `change` to other participants in a same problem
>3) detect-disconnection - emit the `socket.id` to other participants when a user left
>4) detect-participants - broadcast the `socket.id` of all participants

##### Setup socket connection

`server.js`

```javascript
//create an HTTP server
const socketIO = require('socket.io');
var io = socketIO();
var editorSocketService = require('./services/editorSocketService')(io);
io.attach(server);
```

### III. Search Feature in Navbar

![image](https://github.com/zhewangjoe/BitTiger-CS503-1802/blob/CrazyDonut/Week2/img/3.png)

* Provide the search feature in problem-list when entering a term in the `searchBox` of navbar
	* The term can be part of a problem-name or problem-difficulty 
	* uppercase and lowercase are both accepted.


1. Create `InputService` to detect change in the search box

2. Subscribe the `InputService` in problem-list component

```javascript
searchTerm: string = '';
subscriptionInput: Subscription;

getSearchTerm() {
	this.subscriptionInput = this.inputService.getInput()
		.subscribe(inputTerm => this.searchTerm = inputTerm);
}
```
3. Create a Search Pipe in oj-client

```shell
$ cd oj-client/pipes
$ ng g p search
```

4. Use the Search Pipe in `problem-list`

```html
<a class="list-group-item" *ngFor="let problem of (problems | search : searchTerm)" [routerLink]="['./problems', problem.id]"></a>
```

5. Add FormControl in `navbar` component

6. Import `ReactiveFormsModule` in `app.module.ts`

![image](https://github.com/zhewangjoe/BitTiger-CS503-1802/blob/CrazyDonut/Week2/img/6.gif)