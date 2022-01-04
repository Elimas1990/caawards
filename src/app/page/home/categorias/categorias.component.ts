import { Component, OnInit } from '@angular/core';
import { where } from '@angular/fire/firestore';
import { CategoriasService } from 'src/app/servicios/categorias.service';
import { NominadosService } from 'src/app/servicios/nominados.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  listaAnios=[] as  any
  listaCategorias=[] as any
  listaNominados=[] as  any
  anio_actual:number
  anioSelected:number=new Date().getFullYear()
  ternaSelected:string

  constructor(private srvCategoria:NominadosService) { 

  }

  ngOnInit(): void {
  }

  
}
