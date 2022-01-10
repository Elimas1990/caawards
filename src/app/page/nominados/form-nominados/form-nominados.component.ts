import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NominadosService } from 'src/app/servicios/nominados.service';
import { TwitchService } from 'src/app/servicios/twitch.service';
import { StreamersComponent } from './streamers/streamers.component';


@Component({
  selector: 'app-form-nominados',
  templateUrl: './form-nominados.component.html',
  styleUrls: ['./form-nominados.component.scss'],
})
export class FormNominadosComponent implements OnInit {


  @Input() listaStreamers:Array<any>
  @Input() listaCategorias:Array<any>

  @ViewChild('StreamersComponent',{static: true}) child:StreamersComponent;
  
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

    
    this.child.ternaGuardada();
  }

  nombinarCollaps(element:any){
    console.log(element)
  }
 
  

  ngOnInit(): void {
    
  }


}
