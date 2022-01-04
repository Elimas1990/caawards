import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-ternas',
  templateUrl: './ternas.component.html',
  styleUrls: ['./ternas.component.scss']
})
export class TernasComponent implements OnInit {

  @Input() listaCategorias:Array<any>
  @Input() filtroTerna:string
  @Output() selectTerna=new EventEmitter
  constructor() { }

  ngOnInit(): void {
  }

  selectCategoria(e:any,btn:any){
    
    let buttons=document.querySelectorAll('.btn-categoria')
    buttons.forEach(element => {
      element.classList.remove('active')
    });
    e.target.classList.toggle('active')
    this.selectTerna.emit(btn)
  }


}
