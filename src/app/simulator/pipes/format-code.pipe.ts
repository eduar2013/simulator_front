import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCode'
})
export class FormatCodePipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/\s/g, "\xa0");
  }

}
