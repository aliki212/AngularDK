import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpace'

})


export class ConvertToSpacePipe
  implements PipeTransform {
  transform(v: string, ch: string): string {
    return v.replace(ch, ' ');
  }

}