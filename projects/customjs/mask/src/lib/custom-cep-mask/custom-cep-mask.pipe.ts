import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCepMask',
})
export class CustomCepMaskPipe implements PipeTransform {
  transform(value: string = ''): any {
    if (value && value.length > 5) {
      const part1 = value.slice(0, 5);
      const part2 = value.slice(5, 8);
      return `${part1}-${part2}`;
    } else {
      return value;
    }
  }
}
