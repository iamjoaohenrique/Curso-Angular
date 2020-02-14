import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dataPipe'
})
export class DataPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    console.log( value )
    //inverter string
    //return value.split('').reverse().join('');
     var datePipe = new DatePipe("en-US");
     value = datePipe.transform(value, 'dd/MM/yyyy');
     
     return value;
  }

}
