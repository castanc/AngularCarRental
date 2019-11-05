import { ValidatorFn, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { Directive, Input } from '@angular/core';

export function forbiddenEmployeeNameValidator(employeenameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = employeenameRe.test(control.value);
      return forbidden ? {'forbiddenEmployeeName': {value: control.value}} : null;
    };
  }

  @Directive({
    selector: '[appForbiddenName]',
    providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
  })
  export class ForbiddenValidatorDirective implements Validator {
    @Input('appForbiddenEmployeeName') forbiddenEmployeeName: string;
   
    validate(control: AbstractControl): {[key: string]: any} | null {
      return this.forbiddenEmployeeName ? forbiddenEmployeeNameValidator(
          new RegExp(this.forbiddenEmployeeName, 'i'))(control)
                                : null;
    }
  }