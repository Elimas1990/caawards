import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'streamerTagFilter'
})
export class StreamerTagFilterPipe implements PipeTransform {

  transform(items: any[], nombre: string) {
    const resultado=[];
    if(!items) return [];
    if(!nombre) return items;

    return items.filter( it => {
      let check
      if(it.historia){
        let data=Object.keys(it.historia)
        check = data.filter(function(item) {
          return item.includes(nombre)
        })
      }
      
      
      if(it.tag.toLowerCase().includes(nombre)){
        return it
      }
     
    });
  }

}
