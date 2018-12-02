/* let problems = [
    {
      "id": 1,
      "name": "Two Sum",
      "desc": "Given an array of integers, return indices of the two numbers such that they add up to a specific target.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.",
      "difficulty": "easy"
    },
  
    {
      "id": 2,
      "name": "3Sum",
      "desc": "Given an array S of n integers, are there three elements in S such that they add up to a specific target.\n\nFind all unique triplets in S which gives the sum equaul to the target.",
      "difficulty": "medium"
    },
  
    {
      "id": 3,
      "name": "4Sum",
      "desc": "Given an array S of n integers, are there four elements in S such that they add up to a specific target.\n\nFind all unique quadruplets in S which gives the sum equaul to the target.",
      "difficulty": "medium"
    },
  
    {
      "id": 4,
      "name": "Triangle Count",
      "desc": "Given an array of integers, how many three numbers can be found in the array, so that we can build an triangle whose edges length is the three numbers that we find?",
      "difficulty": "hard"
    },
  
    {
      "id": 5,
      "name": "Sliding Window Maximum",
      "desc": "Given an array of integers, there is a sliding window of size k which is moving from the left of the array to the very right.\n\nYou can only see the k numbers in the window. Each time the sliding window moves right by one position.",
      "difficulty": "super"
    }
];
 */
const ProblemModel = require('../models/problemModel');

const getProblems = function() {
    return new Promise((resolve, reject) => {
        //resolve(problems);
        ProblemModel.find({}, function(err, problems) {
            if(err) { //if there is erro when connecting to mongoDB
                reject(err);
            } else {
                resolve(problems);
            }
        });
    });
};

const getProblem = function(id) {
    return new Promise((resolve, reject) => {
        //resolve(problems.find(problem => problem.id === id));
        ProblemModel.findOne({id: id}, function(err, problem) {
            if(err) {
                reject(err);
            } else {
                resolve(problem);
            }
        });
    });
};

const getProblemsByDiff = function(difficulty) {
    return new Promise((resolve, reject) => {
        //resolve(problems.find(problem => problem.id === id));
        ProblemModel.find({difficulty: difficulty}, function(err, problems) {
            if(err) {
                reject(err);
            } else {
                resolve(problems);
            }
        });
    });
};

const addProblem = function(newProblem) {
    return new Promise((resolve, reject) => {
        /* if(problems.find(problem => problem.name === newProblem.name)) {
            reject('Problem already exists');
        } else {
            newProblem.id = problems.length + 1;
            problems.push(newProblem); //add new-problem to the problems array
            resolve(newProblem);
        } */
        ProblemModel.findOne({name: newProblem.name}, function(err, data) { //data is the asynchronize-result of findOne
            if(data) { //find the same name means not OK
                reject('Problem already exists');
            } else { //does not find the same name in database
                ProblemModel.count({}, function(err, num) { //num is the result of count
                    //use count() to generate id
                    newProblem.id = num + 1;
                    let mongoProblem = new ProblemModel(newProblem);
                    mongoProblem.save();
                    resolve(mongoProblem);
                });
            }
        });
    });
}

const modifyProblem = function(name, newProblem) {
    return new Promise((resolve, reject) => {
        ProblemModel.findOne({name: name}, function(err, oldProblem) { 
            if(err) { //does not find the same name in database
                reject('Cannot modify the old problem');
            } else { //find the problem need to be modified
                oldProblem.name = newProblem.name;
                oldProblem.desc = newProblem.desc;
                oldProblem.difficulty = newProblem.difficulty;
                oldProblem.save();
                resolve(oldProblem);    
            }
        });
    });
}

module.exports = {
    getProblems,
    getProblem,
    getProblemsByDiff,
    addProblem,
    modifyProblem
}