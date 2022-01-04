import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-select-anio',
  templateUrl: './select-anio.component.html',
  styleUrls: ['./select-anio.component.scss']
})
export class SelectAnioComponent implements OnInit {

  @Input() listaAnios:Array<any>
  
  @Output() anioSelected = new EventEmitter

  anio:number=new Date().getFullYear()

  constructor() {
    this.anioSelect()
  }

  ngOnInit(): void {
  }

  anioSelect(){
    this.anioSelected.emit(this.anio)
  }
  
}
