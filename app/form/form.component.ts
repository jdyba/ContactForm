import { Order } from './../models/order';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  addOrder: FormGroup;

  messageOrder = new Order();
  success = false;

  listBus: Array<string> = ['Setra 415GT', 'Setra 315GTHD', 'Neoplan316k', 'Neoplan 316k'];
  listOptions: Array<string> = ['Pilota', 'Wyżywienie kierowcy/ów', 'Noclegi kierowcy/ów', 'Opłaty drogowe', 'Opłaty autostrad'];
  sliderPeople = {
    num: 0,
    min: 1,
    max: 100,
    tick: 10
  };


  constructor() {
    const temp = new Date();
    this.addOrder = new FormGroup({
      place: new FormControl(null),
      people: new FormControl(null),
      dateDeparture: new FormControl(null),
      dateArrival: new FormControl(null),
      bus: new FormControl(null),
      timer: new FormControl({hour: temp.getHours(), minute: temp.getMinutes(), second: temp.getSeconds()}),
      contactDescribe: new FormControl(null, Validators.required),
      contactName: new FormControl(null, Validators.required),
      contactEmail: new FormControl(null, [Validators.email, Validators.required]),
      contactPhone: new FormControl(null, Validators.required),
      options: new FormArray([
        new FormControl(null),
        new FormControl(null),
        new FormControl(null),
        new FormControl(null),
        new FormControl(null),
       // new FormControl({id: '3', name: 'Opłaty autostrad', checked: false}),
       // new FormControl({id: '4', name: 'Noclegi kierowcy/ów', checked: false}),
        // new FormControl({id: '5', name: 'Wyżywienie kierowcy/ów', checked: false})
      ])
    });



   }

  ngOnInit() {

  }

  onSubmit() {
    if (this.addOrder.valid === true) {
      this.writeForm();
      this.success = true;
      this.goTo('result');
    } else {
      this.goTo('time');
    }
  }

  onReset() {
    const d = new Date();
    this.addOrder.reset({
      timer: {hour: d.getHours(), minute: d.getMinutes(), second: d.getSeconds()}
    });
    this.goTo('top');
  }

  newOrder () {
    this.success = false;
    this.onReset();
  }



  goTo(temp: string) {
    const element = document.getElementById(temp);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  writeForm () {
    this.messageOrder.place = this.addOrder.get('place').value;
    this.messageOrder.people = this.addOrder.get('people').value;
    this.messageOrder.dateDeparture = this.addOrder.get('dateDeparture').value;
    this.messageOrder.dateArrival = this.addOrder.get('dateArrival').value;
    this.messageOrder.bus = this.addOrder.get('bus').value;
    this.messageOrder.contactDescribe = this.addOrder.get('contactDescribe').value;
    this.messageOrder.contactName = this.addOrder.get('contactName').value;
    this.messageOrder.contactEmail = this.addOrder.get('contactEmail').value;
    this.messageOrder.contactPhone = this.addOrder.get('contactPhone').value;
    this.messageOrder.timer = this.setSmall(this.addOrder.get('timer').value.hour) +
     ':' + this.setSmall(this.addOrder.get('timer').value.minute);

    let i = 0;
    this.messageOrder.options = new Array<string>();
    for (const option of this.addOrder.get('options')['controls']) {
      if (option.value === true) {
        this.messageOrder.options.push(this.listOptions[i]);
      }
      i++;
    }
  }


  setSmall(num: number): string {
    let temp = '00';
    if (num > 9 ) {
      temp = num.toString();
    } else { temp = '0' + num; }
    return temp;
  }

}
