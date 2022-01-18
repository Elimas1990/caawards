import { Component, OnInit } from '@angular/core';
import { where } from '@angular/fire/firestore';
import * as AOS from 'aos';
import { forkJoin, Observable} from 'rxjs';
import { NominadosService } from 'src/app/servicios/nominados.service';
import { StreamersService } from 'src/app/servicios/streamers.service';
import { TwitchLoginService } from 'src/app/servicios/twitch-login.service';
import { TwitchService } from 'src/app/servicios/twitch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  listaAnios=[] as  any
  listaCategorias=[] as any
  listaNominados=[] as  any
  anio_actual:number
  anioSelected:number
  ternaSelected:string

  
  constructor(private srvCategoria:NominadosService,
    private srvStreamers:StreamersService,
    private srvTwitch:TwitchService) { 

    for(let i=new Date().getFullYear();i >= 2018;i--){
      this.listaAnios.push(i)
    }
    
    this.anioSelect(new Date().getFullYear())
    
  }

 

  ngOnInit(): void {
    AOS.init()
    
  }

  validarAuth(user:any){
    console.log(this.ternaSelected)
    this.ternaSelect(this.ternaSelected)
    //this.ternaSelect()
  }

  anioSelect(anio:any){
    this.anioSelected=anio
    this.srvCategoria.consultaSimple('anio','==',Number(this.anioSelected))
    .subscribe(x =>{
      
      x.sort((a:any, b:any) => (a.categoria.nombre > b.categoria.nombre) ? 1 : -1)
    
      this.listaCategorias=x
      this.ternaSelect(this.listaCategorias[0]?.categoria?.nombre)
    })
    
  }

  ternaSelect(terna:any){
    
    this.listaNominados=[]

    if(terna){
      this.ternaSelected=terna
   
      this.srvCategoria.consultaDoble(where('anio','==',Number(this.anioSelected)),where('categoria.nombre','==',this.ternaSelected))
      .subscribe(x =>{
        let obj:any=x[0]

        obj.nominados.forEach((element:any, index:any) => {
          let follows={}
          let teams={}
          
          if(localStorage.getItem('user')){
            this.srvTwitch.search(`login=${element.tag.toLowerCase()}`,"/users").subscribe(x=>{

              let obsFollow=this.srvTwitch.search(`to_id=${x.data[0]?.id}`,"/users/follows")
              let obsTeam=this.srvTwitch.search(`broadcaster_id=${x.data[0]?.id}`,"/teams/channel")
              
              forkJoin([obsFollow,obsTeam]).subscribe(result=>{
              
                follows={followers:result[0].total}

                if(result[1].data?.length > 0){
                  teams={team:result[1].data}
                }

                this.srvStreamers.consultaSimple("tag","==",element.tag).then(x=>{
                  
                  Object.assign(x[0],{puesto:element.puesto})
                  Object.assign(x[0],follows)
                  Object.assign(x[0],teams)
                  obj.nominados[index]=x[0]
                })
              })
            })

          }
        });
        this.listaNominados=obj.nominados
      })
    }
    
  }





}
