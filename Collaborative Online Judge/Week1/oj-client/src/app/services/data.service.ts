import { Injectable } from '@angular/core';
import { Problem } from "../models/problem.model";
import { PROBLEMS } from "../mock-problems";

@Injectable()
export class DataService {
  //list of problems
  problems: Problem[] = PROBLEMS;

  constructor() { }

  //fetch all problems
  getProblems() : Problem[] {
    return this.problems;
  }

  //fetch a problem by id
  getProblem(id: number) : Problem {
    return this.problems.find((problem) => problem.id === id); //javascript-array-find-function
  }

  //fetch problems by difficulty
  getProblemsByDiff(difficulty: string) : Problem[]{
    let result = this.problems.filter((problem) => problem.difficulty === difficulty);
    return result;
  }

  //fetch a problem by name
  getProblemsByName(name: string) : Problem{
    return this.problems.find((problem) => problem.name === name);
  }

  //add a new problem
  addProblem(problem: Problem) {
    problem.id = this.problems.length + 1;
    this.problems.push(problem);
  }
}
