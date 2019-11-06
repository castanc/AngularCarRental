import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export function crossFieldValidator(control: AbstractControl): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = false; //employeenameRe.test(control.value);
      return forbidden ? {'forbiddenEmployeeName': {value: control.value}} : null;
    };
  }


@Directive({
    selector: '[appCrossField]',
    providers: [{ provide: NG_VALIDATORS, useExisting: CrossFieldValidatorDirective, multi: true }]
  })
  export class CrossFieldValidatorDirective implements Validator {
    validate(control: AbstractControl): ValidationErrors {
      return crossFieldValidator(control)
    }
  }

  