import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorsService {

  constructor() { }


  validatePass(control: AbstractControl) {
    debugger;
    if (control && (control.value !== null || control.value !== undefined)) {
      //const cnfpassValue = control.value;

      const passControl = control.root.get('password');
      if (passControl) {
        const passValue = passControl.value;
        if (passValue.length<=6) {
          return {
            isError: true
          };
        }
      }
    }
    return null;
  }
}
