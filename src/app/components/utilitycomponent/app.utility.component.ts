import { Component, OnInit } from '@angular/core';

import {UtilityService} from './../../services/app.utility.service';

@Component({
  selector: 'app-utility-component',
  template: `
    <div>
        <h2>{{message1}}</h2>
    </div>
    <br>
    <div>
        <h2>{{message2}}</h2>
    </div>
  ` 
})
export class UtilityComponent implements OnInit {
  
  message1: string;
  message2: string;
  // inject the service
  constructor(private serv: UtilityService) {
     this.message1 = 'Message 1';
     this.message2 = 'Message 2';
  }

  ngOnInit(): void { 
    this.message1 = this.serv.changeCase(this.message1, 'U');
    this.message2 = this.serv.changeCase(this.message2, 'L');
  }
}
