import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showPrice'
})
export class ShowPricePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
