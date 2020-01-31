import { AbstractControl } from '@angular/forms';

export class EvenValidator {
  // if the value in Control is valid then return null
  // else it will return JSON object as 
  // {valid: false} / {invlaid: true}
   static checkEven(ctrl: AbstractControl): any {
      let val = parseInt(ctrl.value);
      if(val % 2 === 0) {
        return null;
      } else {
        return {invalid:true}
      }
   }
}