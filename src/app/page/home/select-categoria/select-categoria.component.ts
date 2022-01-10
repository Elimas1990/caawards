import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-select-categoria',
  templateUrl: './select-categoria.component.html',
  styleUrls: ['./select-categoria.component.scss']
})
export class SelectCategoriaComponent implements OnInit {

 
  @ViewChild("selectCategoria") selectCategoria:ElementRef
  @ViewChild("fDer") fDer:ElementRef
  @ViewChild("fIzq") fIzq:ElementRef

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

  constructor( private renderer:Renderer2) { 
    
  }

  ngOnInit(): void {
    this.ternaSelect()
  }

  ternaSelect(){
    
    this.ternaSelected.emit(this.terna)
    this.habilitarFlechas()
  }

  cambiarSelect(mas:any){

    let cambio=false
    
    if(mas){
      if(this.selectCategoria.nativeElement["selectedIndex"] < this.listaCategorias.length-1){
        this.selectCategoria.nativeElement["selectedIndex"]+=1
        cambio=true
      }
    }else{
      if(this.selectCategoria.nativeElement["selectedIndex"] > 0){
        this.selectCategoria.nativeElement["selectedIndex"]-=1
        cambio=true
      } 
    }
     
    this.habilitarFlechas()
    this.terna=this.selectCategoria.nativeElement.value
    if(cambio){
      this.ternaSelect()
    }
    
  }

  habilitarFlechas(){
    if(this.fDer){
      this.renderer.removeClass(this.fDer.nativeElement,"disabled")
      this.renderer.removeClass(this.fIzq.nativeElement,"disabled")
      if(this.selectCategoria.nativeElement["selectedIndex"] == 0){
        this.renderer.addClass(this.fIzq.nativeElement,"disabled")
      }
      if(this.selectCategoria.nativeElement["selectedIndex"] == this.listaCategorias.length-1){
        this.renderer.addClass(this.fDer.nativeElement,"disabled")
      }
    }
    
  }

}
