import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CollaborationService } from '../../services/collaboration.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  sessionId: string;
  particiants: string[];

  constructor(private collaboration: CollaborationService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.sessionId = params['id'];
      //this.collaboration.helloConnection();
      //this.collaboration.loseConnection();
      //this.particiants = this.collaboration.showParticipants();
    });
  }
}
