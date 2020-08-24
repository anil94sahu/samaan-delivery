import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], term: string): any[] {
    if (term) {
      return value.filter((x: any) => x['Item Name'].toLowerCase().startsWith(term.toLowerCase()));
    } else {
      return value;
    }

  }

}
