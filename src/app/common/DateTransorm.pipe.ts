import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment'

@Pipe({name: 'elapsedTime'})
export class DateTransformPipe implements PipeTransform {
  transform(value: Date): string {
    return moment(value).fromNow();
  }
}