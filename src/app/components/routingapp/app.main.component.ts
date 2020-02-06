import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  template: `
    <table class="table table-bordered table-striped">
       <tr>
         <td>
           <!--[routerLink] The attribute directive to query to route-table based on path-->
           <a [routerLink]="['']">Home</a>
         </td>
         <td>
           <a [routerLink]="['about', id]">About</a>
         </td>
         <td>
           <a [routerLink]="['contact']">Contact</a>
         </td>
         <td>
           <a [routerLink]="['lazy']">Lazy</a>
         </td>
       </tr>
    </table>
    <hr/>
    <!--router-outlet the container where the component from Route Table will be loaded-->
    <router-outlet></router-outlet>
  ` 
})
export class MainComponent implements OnInit {
  id: number;
  constructor() {
    this.id = 100;
  }

  ngOnInit(): void { }
}
