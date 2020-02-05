import { AbstractControl } from '@angular/forms';
import { StudentLogic } from '../../models/app.student.logic';

export class EvenValidator {
  // if the value in Control is valid then return null
  // else it will return JSON object as 
  // {valid: false} / {invlaid: true}
   static checkEven(ctrl: AbstractControl): any {
      let val = parseInt(ctrl.value);
      if(val % 2 === 0) {
        return null;
      } else {
        return {eveninvalid:true}
      }
   }
}

export class UniqueValidator {
  // if the value in Control is valid then return null
  // else it will return JSON object as 
  // {valid: false} / {invlaid: true}
   static checkUnique(ctrl: AbstractControl): any {
      let val = parseInt(ctrl.value);
      let stds = [];
      console.log(ctrl.value);
      let logic =new StudentLogic();
      stds = logic.getStudents().filter((s,i)=>{
        return s.StudentRowId === val;
      }); 
      console.log(JSON.stringify(stds));
      if(stds.length <= 0) {
        console.log('if');
        return {nounique:true}
      } else {
        console.log('else');

        return null;
      }
   }
}