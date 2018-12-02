//import express module
const express = require('express');

//The top-level express object has a Router() method that creates a new router object.
//Once you've create a router object, 
//you can add middleware and HTTP method routes to it just like an application.
const router = express.Router();

//import problem_service
const problemService = require('../services/problemService');

//import body-parser for parsing request into json-format
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

//Week3
const nodeRestClient = require('node-rest-client').Client;
const restClient = new nodeRestClient();
EXECUTOR_SERVER_URL = 'http://executor:90/build_and_run';
restClient.registerMethod('build_and_run', EXECUTOR_SERVER_URL, 'POST');

//router.METHOD(path, handler) --> router.get()
router.get('/problems', function(req, res) {
    problemService.getProblems() //returned a promise
        .then(problems => res.json(problems)); //promise-resolve: give a respponse in json format
});

//router.METHOD(path, handler) --> router.get()
router.get('/problems/:id', function(req, res) {
    const id = req.params.id;
    problemService.getProblem(+id) //convert data-type : transfer number to string 
        .then(problem => res.json(problem));
});

router.get('/problems/diff/:difficulty', function(req, res) {
    const difficulty = req.params.difficulty;
    problemService.getProblemsByDiff(difficulty) //convert data-type : transfer number to string 
        .then(problems => res.json(problems));
});

//router.METHOD(path, handler) --> router.post()
//use jsonParser to parse the body of the request
router.post('/problems', jsonParser, function(req, res) {
    problemService.addProblem(req.body)
        .then(problem => { res.json(problem); }, 
            (error) => { res.status(400).send('Problem name alredy exists!'); } 
        ); 
});

//modify a problem
router.put('/problems/:name', jsonParser, function(req, res) {
    const name = req.params.name;
    problemService.modifyProblem(name, req.body)
        .then((problem) => { res.json(problem); }, (error) => {res.send('Modification failed');}
        );
});

//Week3
router.post('/build_and_run', jsonParser, (req, res) => {
    const userCode = req.body.usercode;
    const lang = req.body.lang;

    console.log('lang: ' + lang + ', user code: ' + userCode);

    restClient.methods.build_and_run(
        {
            data: {code: userCode, lang: lang},
            headers: {'Content-Type': 'application/json'}
        },
        (data, response) => {
            const text = `Build output: ${data['build']}, execute output: ${data['run']}`;
            res.json(text);
        }
    )
})

module.exports = router;