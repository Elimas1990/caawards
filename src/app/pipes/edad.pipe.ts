import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'edad'
})
export class EdadPipe implements PipeTransform {

  transform(value: any): unknown {
    if(value){
      let fecha_form=moment(value.toDate())
      let fecha_actual=moment(new Date())
      let fecha_nacimiento=fecha_actual.diff(fecha_form, 'years'); 
      return fecha_nacimiento;
    }
    return 'Desconocida';

    
  }

}
