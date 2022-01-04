import { Component, Input, OnInit } from '@angular/core';
import { NominadosService } from 'src/app/servicios/nominados.service';

@Component({
  selector: 'app-lista-nominados',
  templateUrl: './lista-nominados.component.html',
  styleUrls: ['./lista-nominados.component.scss']
})
export class ListaNominadosComponent implements OnInit {

  @Input() listaNominados:Array<any>
  constructor() {
    
  }

  ngOnInit(): void {
  }

}
