import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    // console.log('setTimeout start execution'); 
    // setTimeout( ()=> { console.log('callback called'); }, 5000); 
    // console.log('setTimeout end execution');

    // let promise = new Promise( (resolve, reject) => {
    //   console.log('promise exec');
    //   let x = 0;

    //   setTimeout(() => {
    //     if (x > 20) {
    //       resolve('its great');
    //     } else if (x > 10) {
    //       resolve('its even better');
    //     } else {
    //       reject('promise rejected');
    //     }
    //   }, 3000);

    // });

    // promise.then((value: string) => {
    //   console.log(value);
    // }, (error: string) => console.log(error));

    let stream$ = new Observable(observer => {
      console.log('observable exec');

      observer.next(1);
      observer.next(2);
      observer.error(new Error('not any more'));

      observer.complete();
    });

    let subscription = stream$.subscribe(
      value => console.log(value),
      error => console.error(error),
      () => console.log('done')
    );
  }

}
