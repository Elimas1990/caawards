import { Component, Input, OnInit } from '@angular/core';
import { NominadosService } from 'src/app/servicios/nominados.service';
import { TwitchService } from 'src/app/servicios/twitch.service';


@Component({
  selector: 'app-form-nominados',
  templateUrl: './form-nominados.component.html',
  styleUrls: ['./form-nominados.component.scss']
})
export class FormNominadosComponent implements OnInit {


  @Input() listaStreamers:Array<any>
  @Input() listaCategorias:Array<any>
  
  categoriaSelected:any
  streamersSelected:Array<object>

  filtroStreamer:string
  filtroTerna:string

  constructor(private srvTwitch:TwitchService,
    private srvNominados:NominadosService) {

  }

  selectTerna(value:any){
    this.categoriaSelected=value
  }

  streamersSeleccionados(value:any){
    this.streamersSelected=value
  }

  registrarTerna(){

    let obj={}
    Object.assign(obj,{categoria:this.categoriaSelected})

    Object.assign(obj,{nominados:this.streamersSelected})
    
    Object.assign(obj,{anio:new Date().getFullYear()})

    this.srvNominados.registrarNominados(obj)
  }

  ngOnInit(): void {
    
  }


}
