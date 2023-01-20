import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seemore'
})
export class SeemorePipe implements PipeTransform {

  transform(biography:string , limit:number): string {
    return biography.split(' ').slice(0,limit).join(' ');
  }

}
