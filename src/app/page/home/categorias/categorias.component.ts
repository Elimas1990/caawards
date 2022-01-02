import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/servicios/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  listaCategorias=[]
  constructor(private serviceCategoria:CategoriasService) { 
    this.serviceCategoria.getAll().subscribe(x =>{
      this.listaCategorias=x
    })
  }

  ngOnInit(): void {
  }

}
