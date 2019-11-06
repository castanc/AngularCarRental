import { AbstractControl, ValidatorFn } from '@angular/forms';

// validation function
export function validateEmailFactory() : ValidatorFn {
  return (c: AbstractControl) => {
    
    let isValid = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(c.value);  

    if(isValid) {
        return null;
    } else {
        return {
            emailValidator: {
                valid: false
            }
        };
  }

}
}
