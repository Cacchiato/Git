import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.displayTime();
  }

  displayTime() {
    var date = new Date();
    
    var week = date.getDay();
    var weekday;
    switch(week) {
      case 0: 
        weekday = "Sunday";
        break;
      case 1:
        weekday = "Monday";
        break;
      case 2: 
        weekday = "Tuesday";
        break;
      case 3:
        weekday = "Wednesday";
        break;
      case 4: 
        weekday = "Thursday";
        break;
      case 5:
        weekday = "Friday";
        break;
      case 6:
        weekday = "Saturday";
        break;
    }
    
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    
    //mm-dd-yyyy --:--:-- weekday
    var curDate = "Today is " + (month < 10 ? '0' + month : month) + "/" + (day < 10 ? "0" + day : day) + "/" + year + ", " + weekday;
    
    var curTime = "<span>" + (hour < 10 ? "0" + hour : hour) + "</span><span>:" + "</span><span>" + (minute < 10 ? "0" + minute : minute) + "</span><span>:" + "</span><span>" + (second < 10 ? "0" + second : second) + "</span>";
    
    document.getElementById("current-date").innerHTML = curDate;
    document.getElementById("current-time").innerHTML = curTime;

    //setTimeout(this.displayTime(), 1000);
  }
}
