import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TwitchService } from 'src/app/servicios/twitch.service';


@Component({
  selector: 'app-streamers',
  templateUrl: './streamers.component.html',
  styleUrls: ['./streamers.component.scss']
})
export class StreamersComponent implements OnInit {

  private _listaStreamers:any;  
  get listaStreamers(): any { 
    return this._listaStreamers;
  }
  @Input() set listaStreamers(value:Array<any>){
    if(value.length > 0){
      value.forEach(element => {
        this.srvTwitch.search(`login=${element.tag.toLowerCase()}`,"/users").subscribe(x=>{
            let avatar={avatar:'https://static-cdn.jtvnw.net/jtv_user_pictures/8a6381c7-d0c0-4576-b179-38bd5ce1d6af-profile_image-70x70.png'}
            
            if (x.data.length >0){
              avatar={avatar:x.data[0].profile_image_url}
            }
            
            Object.assign(element,avatar)
          })
      });
      this._listaStreamers=value
    }
  }
  @Input() filtroStreamer:string
  @Output() streamersSeleccionados= new EventEmitter
  listaSeleccionados:Array<any>=[]

  constructor(private srvTwitch:TwitchService) { }

  ngOnInit(): void {
  }

  selectStreamer(btn:any){

    if(btn.selected){
      delete btn.selected;
    }else{
      this.listaStreamers.find((obj:any) => {
        if(obj.tag === btn.tag){
          Object.assign(obj,{selected:true})
        }
      });
    }

    this.listaStreamers.sort((a:any,b:any)=>{
      var leftHas = a.hasOwnProperty("selected");
      var rightHas = b.hasOwnProperty("selected");
      return leftHas ? -1 : rightHas ? 1 : 0;
    });
    
  
    this.listaSeleccionados=this.listaStreamers.filter((x:any)=>x.selected===true)

    this.streamersSeleccionados.emit(this.listaSeleccionados)
    
  }

  public ternaGuardada(){
    this.listaStreamers.forEach((element:any) => {
      delete element.selected
    });
  }




}
