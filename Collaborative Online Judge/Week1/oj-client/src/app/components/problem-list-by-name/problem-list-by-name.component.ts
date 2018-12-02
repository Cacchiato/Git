import { Component, OnInit } from '@angular/core';
import { Problem } from '../../models/problem.model';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-problem-list-by-name',
  templateUrl: './problem-list-by-name.component.html',
  styleUrls: ['./problem-list-by-name.component.css']
})
export class ProblemListByNameComponent implements OnInit {
  problem: Problem;
  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.problem = this.dataService.getProblemsByName(params['name']);
    });
  }
}
