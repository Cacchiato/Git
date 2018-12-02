import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Problem } from '../../models/problem.model';
import { DataService } from '../../services/data.service';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-problem-list-by-difficulty',
  templateUrl: './problem-list-by-difficulty.component.html',
  styleUrls: ['./problem-list-by-difficulty.component.css']
})
export class ProblemListByDifficultyComponent implements OnInit {
  problems: Problem[];
  //two injections
  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dataService.getProblemsByDiff(params['difficulty'])
        .then(problems => this.problems = problems); //resolve the problem - asynchronize
    });
  }
}

