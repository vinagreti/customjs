import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCpfMask',
})
export class CustomCpfMaskPipe implements PipeTransform {
  transform(value: string = ''): any {
    if (value.length === 11) {
      const part1 = value.slice(0, 3);
      const part2 = value.slice(3, 6);
      const part3 = value.slice(6, 9);
      const part4 = value.slice(9, 11);
      return `${part1}.${part2}.${part3}-${part4}`;
    } else {
      return value;
    }
  }
}
