import { Pipe, PipeTransform } from '@angular/core';
import { work } from '../interfaces/userwork';

@Pipe({
  name: 'serchpipe',
  standalone: true
})
export class SerchpipePipe implements PipeTransform {

  transform(inGato:work[] , userWord:string ): work[]{
    return inGato.filter((item)=>item.firstName.toLocaleLowerCase().includes(userWord.toLocaleLowerCase()));
  }


}
