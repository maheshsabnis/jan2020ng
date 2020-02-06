import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mytest-component',
  template: `
     <h2>My Test Component</h2>
  ` 
})
export class MyTestComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
