import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanatexto'
})
export class BooleanatextoPipe implements PipeTransform {

  //El primer valor es el que tengo y el segundo al que quiero 
  //transformar en este caso de booleano a texto

  transform(value: boolean, ...args: string[]): string {
  
  // cero es true y 1 es false
    if (value) {
      return args[0];
    } else {
      return args[1];
      
    }
  }

}
