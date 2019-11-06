
import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, ValidatorFn, FormControl } from '@angular/forms';
import { validateEmailFactory } from './validate-email-factory'

@Directive({
    selector: '[emailValidator][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: EmailValidator, multi: true }
      ]
    
    
  })
  export class EmailValidator implements Validator { 
    validator: ValidatorFn;

    constructor() {
        this.validator = validateEmailFactory();
      }
      
      validate(c: FormControl) {
        return this.validator(c);
      }
    
  }
  
  