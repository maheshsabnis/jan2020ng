import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-component',
  template: `
     <h2>The Contact Component</h2>
     <div>{{message}}</div>
     <br/>
     <a [routerLink]="['student']">Student</a>
     <br/>
     <router-outlet></router-outlet>
  ` 
})
export class ContactComponent implements OnInit {
  message: string;
  constructor() { 
    this.message = 'The Contact Component';
  }

  ngOnInit(): void { }
}
