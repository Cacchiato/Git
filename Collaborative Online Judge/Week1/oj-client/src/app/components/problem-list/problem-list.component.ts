import { Component, OnInit } from '@angular/core';
import { Problem } from '../../models/problem.model';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Router} from '@angular/router';

//@Component is a decorator function that specifies the Angular metadata for the component.
//The CLI generates three metadata properties: selector, templateUrl, styleUrls
@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {//always export the class!
  //1) create a member variable problems
  problems: Problem[];
  diffProblems: Problem[];
  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  //ngOnInit is a lifecycle hook. 
  //Angular calls ngOnInit shortly after creating a component.
  //It's a good place to put initialization logic.
  ngOnInit() {
    //3) call the getProblem() method inside ngOnInit()
    this.getProblems();

  } 

  getProblems() {
    this.problems = this.dataService.getProblems();
    
  }

  getProblemsByDiff() {
    this.diffProblems = this.dataService.getProblemsByDiff('');
  }
}
