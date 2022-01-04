import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'streamerTagFilter'
})
export class StreamerTagFilterPipe implements PipeTransform {

  transform(items: any[], nombre: string,campo: string) {
    const resultado=[];
    if(!items) return [];
    if(!nombre) return items;

    return items.filter( x => {
      /*let check
      if(it.historia){
        let data=Object.keys(it.historia)
        check = data.filter(function(item) {
          return item.includes(nombre)
        })
      }*/
      
      
      if(x[campo].toLowerCase().includes(nombre)){
        return x
      }
     
    });
  }

}
