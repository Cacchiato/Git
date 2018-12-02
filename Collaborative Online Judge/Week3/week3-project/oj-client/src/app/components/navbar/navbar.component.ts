import { Component, OnInit } from '@angular/core';
import { FormControl }  from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import 'rxjs/add/operator/debounceTime';
import { InputService } from '../../services/input.service';
import { Input } from '@angular/compiler/src/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  searchBox: FormControl = new FormControl();
  subscription: Subscription;

  constructor(private input: InputService, private router: Router) { }

  ngOnInit() {
    this.subscription = this.searchBox
                            .valueChanges
                            .debounceTime(200)  //wait for 200ms
                            .subscribe(
                              term => {
                                this.input.changeInput(term);
                              }
                            );
  }
    
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  searchProblem(): void {
    this.router.navigate(['/problems']);
  }
}
