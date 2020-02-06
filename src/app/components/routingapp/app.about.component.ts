import { Component, OnInit } from '@angular/core';

// import the Router Class, that provides 'navigate([''])' method, that accepts 
// an array representing the route-path
import {Router, ActivatedRoute} from '@angular/router'; 

// ActivatedRoute: the class that subscribe to Route Expression and provide the
// parameter information


@Component({
  selector: 'app-about-component',
  template: `
     <h2>The About Component</h2>
     <div>{{message}}</div>
     <br>
     <input type="button" value="Navigate" class="btn btn-warning" (click)="navigateToContact()"/>
  ` 
})
export class AboutComponent implements OnInit {
  message: string;
  // inject the Router in ctor, it will be resolved by the 'RouterModule'
  // inject the ActivatedRoute in ctor, so that it will subscribe to route parameter
  constructor(private router: Router, private act: ActivatedRoute) { 
    this.message = 'The About Component';
  }

  // subscribe to route parameter
  ngOnInit(): void { 
      this.act.params.subscribe(param=> {
        this.message += param.id; // param is an object that will be used to read paramter
      });                         // value  
  }

  navigateToContact(): void {
     // the first value in array parameter is route path and next values of array 
     // can be rpote-parameters
      this.router.navigate(['contact']);
  }
}
