import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  REGEX = /(\d{2})(\d{5})(\d{4})/;

  transform(value: any, args?: any): any {

      if (value) {
          if (value.length === 11) {
              return value.replace(this.REGEX, '($1) $2-$3');
          } else {
              return value;
          }
      }
      return value;
  }

}
