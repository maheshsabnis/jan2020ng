import {Component} from '@angular/core';
@Component({
  selector:'app-simple-component',
  templateUrl: './app.simple.view.html'
})
export class SimpleComponent {
   message: string;
   name: string;

   constructor() {
     this.message = 'Hello Angular';
     this.name = '';
   }

   display(event): void {
     this.message = `Hello Event ${event.target.value}`;
   }
}
