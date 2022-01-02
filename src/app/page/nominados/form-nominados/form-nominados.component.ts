import { Component, Input, OnInit } from '@angular/core';
import { TwitchService } from 'src/app/servicios/twitch.service';


@Component({
  selector: 'app-form-nominados',
  templateUrl: './form-nominados.component.html',
  styleUrls: ['./form-nominados.component.scss']
})
export class FormNominadosComponent implements OnInit {

  private _listaStreamers:any; // private property _item

  // use getter setter to define the property
  get listaStreamers(): any { 
    return this._listaStreamers;
  }
  @Input() set listaStreamers(value:Array<any>){
    if(value.length > 0){
      value.forEach(element => {
        this.srvTwitch.search(`login=${element.tag.toLowerCase()}`,"/users").subscribe(x=>{
          let avatar={avatar:'https://static-cdn.jtvnw.net/jtv_user_pictures/8a6381c7-d0c0-4576-b179-38bd5ce1d6af-profile_image-70x70.png'}
          console.log(x.data.length)
          if (x.data.length >0){
            avatar={avatar:x.data[0].profile_image_url}
          }
          
          Object.assign(element,avatar)
          })
      });
      this._listaStreamers=value
    }
  }
  
  @Input() listaCategorias:Array<any>

  streamerSelected:Array<any>=[]

  filtroStreamer:string

  constructor(private srvTwitch:TwitchService) {
   
    //this.srvTwitch.search("login=duendepablo&login=coscu","/users").subscribe(x=>console.log(x))
  }

  ngOnInit(): void {
    
  }
  
  selectCategoria(e:any,btn:any){
    
    let buttons=document.querySelectorAll('.btn-categoria')
    buttons.forEach(element => {
      element.classList.remove('active')
    });
    e.target.classList.toggle('active')
  }

  selectStreamer(e:any,btn:any){

    if(e.target.classList.contains('active')){
      e.target.classList.remove('active')
      e.target.parentElement.lastChild.classList.remove("bg-select")
    }else{
      e.target.classList.toggle('active')
      e.target.parentElement.lastChild.classList.add("bg-select")
    }
    
    let buttons=document.querySelectorAll('.btn-streamer')

    let lista_select=document.querySelectorAll('.btn-streamer.active')

    const sublista:Array<any>=[]
    
    lista_select.forEach(element => {
      sublista.push(element.getAttribute('data-sectionvalue'))
    });
    this.streamerSelected=sublista

    console.log()
    
  }

  filtrarStreamer(){

    const result = this.listaStreamers.filter((s:any) => {
      console.log(this.filtroStreamer.toLowerCase())
      console.log(s.tag.toLowerCase())
      return s.tag.toLowerCase().includes(this.filtroStreamer.toLowerCase());
    });
    this.listaStreamers=result
  }
}
