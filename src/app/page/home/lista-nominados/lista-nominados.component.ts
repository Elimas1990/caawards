import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { NominadosService } from 'src/app/servicios/nominados.service';
import { StreamersService } from 'src/app/servicios/streamers.service';
import { TwitchService } from 'src/app/servicios/twitch.service';

@Component({
  selector: 'app-lista-nominados',
  templateUrl: './lista-nominados.component.html',
  styleUrls: ['./lista-nominados.component.scss'],
  animations: [
    trigger('inOutAnimation',[
      transition(
        ':enter',[
          style({ opacity: 0 }),
          animate('0.5s ease-out',
                  style({ opacity: 1 }))
      ]),
      transition(
        ':leave',[
          style({ opacity: 1 }),
          animate('0.5s ease-in', 
                  style({  opacity: 0 }))
      ])
    ]),
    trigger('flip', [
      state('front', style({
        transform: 'rotateY(0deg)'
      })),
      state('back', style({
        transform: 'rotateY(180deg)'
      })),
      transition('front => back', [
        animate('0.5s 0s ease-out',
          keyframes([
            style({
              transform: 'perspective(400px) rotateY(0deg)',
              offset: 0
            }),
            style({
              transform: 'perspective(400px) rotateY(180deg)',
              offset: 1
            })
          ]))
      ]),
      transition('back => front', [
        animate('0.5s 0s ease-in',
          keyframes([
            style({
              transform: 'perspective(400px) rotateY(180deg)',
              offset: 0
            }),

            style({
              transform: 'perspective(400px) rotateY(0deg)',
              offset: 1
            })
          ]))
      ])
    ])
  ]
})

export class ListaNominadosComponent implements OnInit {

  
  @Input() set listaNominados(value:Array<any>){


    this.listaStreamers=value;
    this.listaCartas=[]
    value.forEach(()=>{
      this.listaCartas.push('front')

    })
    

    this.showImage=false
    setTimeout(() => {
      this.showImage=true
    }, 500);
    

  }
  listaTags:Array<any>=[]
  
  listaStreamers:Array<any>=[]

  listaCartas:Array<any>=[]
  constructor(private srvStreamer:StreamersService,
    private srvTernas:NominadosService,
    private srvTwitch:TwitchService) {
      
  }

  
  ngOnInit(): void {
  }
  showImage = false;
  

  flipState = 'black';
  onFlipClick(index:number) {
    
    if (this.listaCartas[index] == 'front') {
      this.listaCartas[index] = 'back';
    } else {
      this.listaCartas[index] = 'front';
    }
  }
}
