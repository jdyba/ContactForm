import { AppService } from './../services/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.css']
})
export class TimePickerComponent implements OnInit {

  resultMin;
  resultHour;

  constructor(public service: AppService) {

   }

  ngOnInit() {
    this.resultHour = this.setSmall(this.service.hourWatch);
    this.resultMin = this.setSmall(this.service.minuteWatch);
  }


  setSmall(num: number): string {
    let temp = '00';
    if (num > 9 ) {
      temp = num.toString();
    } else { temp = '0' + num; }
    return temp;
  }

  upHour() {
  this.service.upHour();
  this.resultHour = this.setSmall(this.service.hourWatch);
  }

  downHour() {
  this.service.downHour();
  this.resultHour = this.setSmall(this.service.hourWatch);

  }

  upMinute () {
  this.service.upMinute();
  this.resultMin = this.setSmall(this.service.minuteWatch);
  }

  downMinute () {
  this.service.downMinute();
  this.resultMin = this.setSmall(this.service.minuteWatch);
  }

}
