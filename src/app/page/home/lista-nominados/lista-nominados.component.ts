import { Component, OnInit } from '@angular/core';
import { NominadosService } from 'src/app/servicios/nominados.service';

@Component({
  selector: 'app-lista-nominados',
  templateUrl: './lista-nominados.component.html',
  styleUrls: ['./lista-nominados.component.scss']
})
export class ListaNominadosComponent implements OnInit {

  constructor(srvNominados:NominadosService) {
    const dat=srvNominados.consoltarNominados('puesto','==',1)
    dat.subscribe(x =>{
      //console.log(x)
    })
   }

  ngOnInit(): void {
  }

}
