import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  hourWatch;
  minuteWatch;

  constructor() {
    this.setWatchNow();
   }

   setWatchNow() {
    const d: Date = new Date();
    this.hourWatch = d.getHours();
    this.minuteWatch = d.getMinutes();
   }

   upHour() {
    if (this.hourWatch >= 23) {
      this.hourWatch = 0;
    } else { this.hourWatch++; }

   }
   downHour() {
    if (this.hourWatch <= 0) {
      this.hourWatch = 23;
    } else { this.hourWatch--; }
   }
   upMinute() {
    if (this.minuteWatch >= 59) {
      this.minuteWatch = 0;
    } else { this.minuteWatch++; }
   }
   downMinute() {
    if (this.minuteWatch <= 0) {
      this.minuteWatch = 59;
    } else { this.minuteWatch--; }
   }

}
