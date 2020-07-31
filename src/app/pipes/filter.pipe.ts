import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(list: any[], ...args: string[]): unknown {
    return list.filter(item => item.type === args[0]);
  }
}
