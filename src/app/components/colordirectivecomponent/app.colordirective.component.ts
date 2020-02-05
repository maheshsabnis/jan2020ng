import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colordirective-component',
  template: `
    <table class="table table-striped table-bordered">
       <tr>
          <td>
            <input type="radio" name="r" value="red" (click)="color='red'"> Red
          </td>
          <td>
            <input type="radio" name="r" value="yellow" (click)="color='yellow'"> Yellow
          </td>
          <td>
            <input type="radio" name="r" value="blue" (click)="color='blue'"> Blue
          </td>
       </tr>
    </table>
    <hr/>
    <div class="container" [setColor]="color">The First Div</div>
    <br/>
    <div class="container" [setColor]="color">The Seccond Div</div>
    <br/>
    <div class="container" [setColor]="color">The Third Div</div>
  ` 
})
export class ColorDirectiveComponent implements OnInit {
  color: string;
  constructor() {
    this.color  ='';
   }

  ngOnInit(): void { }
}
