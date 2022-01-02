import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/servicios/categorias.service';
import { StreamersService } from 'src/app/servicios/streamers.service';

@Component({
  selector: 'app-nominados',
  templateUrl: './nominados.component.html',
  styleUrls: ['./nominados.component.scss']
})
export class NominadosComponent implements OnInit {

  urlStreamer:any
  listaStreamers=[]
  listaCategorias=[]
  constructor(private srvStreamers:StreamersService,
    private serviceCategoria:CategoriasService) { 
    srvStreamers.getAll().subscribe(x=>this.listaStreamers=x)
    serviceCategoria.getAll().subscribe(x=>this.listaCategorias=x)
  }

  ngOnInit(): void {
  }

  dataUsuario(user:object){
    this.srvStreamers.guardarStreamer(user)
    
  }

}
