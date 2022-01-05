import { Component, Input, OnInit } from '@angular/core';
import { NominadosService } from 'src/app/servicios/nominados.service';
import { StreamersService } from 'src/app/servicios/streamers.service';

@Component({
  selector: 'app-lista-nominados',
  templateUrl: './lista-nominados.component.html',
  styleUrls: ['./lista-nominados.component.scss']
})
export class ListaNominadosComponent implements OnInit {

  @Input() set listaNominados(value:Array<any>){
    /*value.forEach((element:any)=>{
      this.listaTags.push(element.tag)
      
    })*/
    this.listaStreamers=value;
    //console.log(value)
    /*this.srvStreamer.consultaSimple('tag','in',this.listaTags).subscribe(x=>{
      
      this.listaStreamers=x
      this.listaTags=[]
    })*/
  }
  listaTags:Array<any>=[]
  listaStreamers:Array<any>=[]
  constructor(private srvStreamer:StreamersService) {
    
  }

  ngOnInit(): void {
  }

}
