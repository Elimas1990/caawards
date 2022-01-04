import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-categoria',
  templateUrl: './select-categoria.component.html',
  styleUrls: ['./select-categoria.component.scss']
})
export class SelectCategoriaComponent implements OnInit {

 


  private _listaCategorias:any;  
  get listaCategorias(): any { 
    return this._listaCategorias;
  }
  @Input() set listaCategorias(value:Array<any>){

    this._listaCategorias=value
    this.terna=this.listaCategorias[0]?.categoria.nombre
  }

  @Output() ternaSelected = new EventEmitter
  
  terna:string
  constructor() { 
    this.ternaSelect()
  }

  ngOnInit(): void {
    
  }

  ternaSelect(){
    this.ternaSelected.emit(this.terna)
  }

}
