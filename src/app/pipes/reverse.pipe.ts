import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
/*  en la funcion transform se dfine lo que se va a hacer, ahora se quita args
ya que nova se va a usar*/
  transform(value:string): string {
    return value.split('').reverse().join('');
  }

}
