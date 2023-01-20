import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'number'
})
export class NumberPipe implements PipeTransform {

  transform(num:number): number{
    return  parseInt( num?.toString().slice(0,3)) * 10;
  }

}
