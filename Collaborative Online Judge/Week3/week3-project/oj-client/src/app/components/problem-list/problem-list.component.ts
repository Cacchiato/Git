import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Problem } from '../../models/problem.model';
import { DataService } from '../../services/data.service';
import { InputService } from '../../services/input.service';

//@Component is a decorator function that specifies the Angular metadata for the component.
//The CLI generates three metadata properties: selector, templateUrl, styleUrls
@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit, OnDestroy {//always export the class!
  //1) create a member variable problems
  problems: Problem[];

  //2) Subscribe to the data fetched from DataService
  subscriptionProblems: Subscription;

  //3) Subscribe to the search term from InputService
  searchTerm: string = '';
  subscriptionInput: Subscription;

  constructor(private dataService: DataService, private inputService: InputService) { }

  //6) call the getProblem() and getSearchTerm() method inside ngOnInit()
  ngOnInit() {
    this.getProblems();
    this.getSearchTerm();
  }

  //7) Unsubscription to avoid memory leak
  ngOnDestroy() {
    this.subscriptionProblems.unsubscribe();
  }

  //4) create a method to fetch problems
  getProblems() {
    //this.problems = this.dataService.getProblems();
    this.subscriptionProblems = this.dataService.getProblems()
      .subscribe(problems => this.problems = problems);
  }

  //5) create a method to fetch search term
  getSearchTerm(): void {
    this.subscriptionInput = this.inputService.getInput()
      .subscribe(inputTerm => this.searchTerm = inputTerm);
  }
}
