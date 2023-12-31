import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MatchPasswordService implements Validator {

  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    
    const { password,passwordConfirmation } = control.value;
    if(password === passwordConfirmation){
      return null;
    }else{
      return { passwordDontMatch:true }
    }
    
  }
  
}
