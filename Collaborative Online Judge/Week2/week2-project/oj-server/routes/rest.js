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

module.exports = router;