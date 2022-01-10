import { Component, ElementRef, EventEmitter, Input, OnInit,AfterViewInit, Output, QueryList, Renderer2, ViewChild, ViewChildren,OnChanges  } from '@angular/core';


@Component({
  selector: 'app-select-anio',
  templateUrl: './select-anio.component.html',
  styleUrls: ['./select-anio.component.scss']
})
export class SelectAnioComponent implements AfterViewInit  {

  @Input() listaAnios:Array<any>
  
  @Output() anioSelected = new EventEmitter

  @ViewChildren('btnn') botones: QueryList<any>;

  //@ViewChild('contenedorlinea') linea: ElementRef;
  @ViewChild('contenedorlinea') linea: ElementRef<any>;
  @ViewChild('fechaIzq') fIzq: ElementRef<any>;
  @ViewChild('fechaDer') fDer: ElementRef<any>;

  selected=0

  anio:number=new Date().getFullYear()

  constructor(private renderer:Renderer2) {
  
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
    this.anioSelect(this.botones.toArray()[this.selected].nativeElement,0,true)
  }

  anioSelect(x:any,index:number,inicio:boolean){
 
    this.selected=index
    let scrollTotal=(this.linea.nativeElement.scrollWidth - this.linea.nativeElement.clientWidth)

    let move=scrollTotal/(this.listaAnios.length-1)*index 
    this.linea.nativeElement.scrollTo({ left: (move), behavior: 'smooth' });

    if(inicio){
      this.anioSelected.emit(x.innerText)
      x.classList.add("active")
    }else{
      this.anioSelected.emit(x.target.innerText)
      this.botones.toArray().forEach(x=>{
        this.renderer.removeClass(x.nativeElement, "active");
      })
      x.target.classList.add("active")
      
    }

    this.habilitarControles()
    //this.renderer.removeClass(this.botones.nativeElement, "active");

  }

  habilitarControles(){
   
      //let scrollTotal=(this.linea.nativeElement.scrollWidth - this.linea.nativeElement.clientWidth)
  
      if(this.selected > 0){
        this.renderer.removeClass(this.fIzq.nativeElement, "disabled");
      }else{
        this.renderer.addClass(this.fIzq.nativeElement, "disabled");
      }
      if(this.selected < this.botones.toArray().length-1){
        this.renderer.removeClass(this.fDer.nativeElement, "disabled");
      }else{
        this.renderer.addClass(this.fDer.nativeElement, "disabled");
      }
    
    
  }

  

  scrollLeft(lado:boolean) {
  


    let move=(this.linea.nativeElement.scrollWidth - this.linea.nativeElement.clientWidth)/(this.listaAnios.length-1) 

    let obj={}
    if(lado){

      obj={ left: (this.linea.nativeElement.scrollLeft - move), behavior: 'smooth' }
      this.selected-=1
    }else{
      obj={ left: (this.linea.nativeElement.scrollLeft + move), behavior: 'smooth' }
      this.selected+=1
    }
  
    if(this.selected < this.botones.toArray().length){
      let el: HTMLElement = this.botones.toArray()[this.selected].nativeElement
      el.click();
    }
   
    this.linea.nativeElement.scrollTo(obj);
    this.habilitarControles()
    
  }


  
}
