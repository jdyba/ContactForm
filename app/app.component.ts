import { AppService } from './services/app.service';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    show = false;
    information = '';

    constructor () {

    }

  showD() {
    this.show = true;
    console.log(this.show);
    this.information = 'pokazuje komunikat';
    const element = document.getElementById('information');
    element.scrollIntoView({
      behavior: 'smooth'
    });

  }

  hiddenD() {
    this.information = ' ';
    this.show = false;
    console.log(this.show);

    const element = document.getElementById('list');
    console.log(element);
    element.scrollIntoView({
      behavior: 'smooth'
    });
  }


}

