import { Injectable } from '@angular/core';
import { Problem } from "../models/problem.model";
//import { PROBLEMS } from "../mock-problems";

//Week2 - fetch data from backend server
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

//week2
@Injectable()
export class DataService {
  //use problemSource to represent a list of problems
  private _problemSource = new BehaviorSubject<Problem[]>([]);
  
  //inject HTTP Client
  constructor(private httpClient: HttpClient) { } 

  getProblems(): Observable<Problem[]> {
    this.httpClient.get('api/v1/problems') //call backend api through httpClient to get response
      .toPromise()  //the response is a Observable type ==> convert it to Promise type

      .then((res: any) => { //if the promise resolves successfully, call next to send response
        this._problemSource.next(res); 
      })

      .catch(this.handleError); //if the promise failed to resolve, handleError is the callback

      return this._problemSource.asObservable();
  }

  getProblem(id: number): Promise<Problem> {
    return this.httpClient.get(`api/v1/problems/${id}`)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }

  addProblem(problem: Problem) {
    const options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.httpClient.post('api/v1/problems', problem, options)
      .toPromise()
      .then((res: any) => { 
        this.getProblems(); //fetch the new problem-list after adding a new problem successdully
        return res;
      })
      .catch(this.handleError);
  }

  //fetch problems by difficulty
  getProblemsByDiff(difficulty: string) : Promise<Problem[]>{
    //let result = this.problems.filter((problem) => problem.difficulty === difficulty);
    //return result;
    return this.httpClient.get(`api/v1/problems/diff/${difficulty}`)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.body || error);
  }

  //Week3
  buildAndRun(data): Promise<any> {
    const options = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.httpClient.post('api/v1/build_and_run', data, options)
      .toPromise()
      .then(res => {
        console.log(res);
        return res;
      })
      .catch(this.handleError);
  }
} 

/* week1
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

  //add new problem
  addProblem(problem: Problem) {
    problem.id = this.problems.length + 1;
    this.problems.push(problem);
  }
}
*/