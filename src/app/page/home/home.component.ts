import { Component, OnInit } from '@angular/core';
import { where } from '@angular/fire/firestore';
import { NominadosService } from 'src/app/servicios/nominados.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  img_banner=["../../../assets/img/banner_ca2021.png",
  "../../../assets/img/banner_ca2020.png",
  "../../../assets/img/banner_ca2019.jpg"]

  listaAnios=[] as  any
  listaCategorias=[] as any
  listaNominados=[] as  any
  anio_actual:number
  anioSelected:number
  ternaSelected:string


  constructor(private srvCategoria:NominadosService) { 

    for(let i=new Date().getFullYear();i >= 2018;i--){
      this.listaAnios.push(i)
    }
    this.anioSelect(new Date().getFullYear())
    
  }


  ngOnInit(): void {
    this.img_banner.forEach(element => {
      
    });
    
  }

  anioSelect(anio:any){
    this.anioSelected=anio
    this.srvCategoria.consultaSimple('anio','==',Number(this.anioSelected))
    .subscribe(x =>{
      this.listaCategorias=x
      this.ternaSelect(this.listaCategorias[0]?.categoria?.nombre)
    })
    
  }

  ternaSelect(terna:any){
    if(terna){
      this.ternaSelected=terna
   
      this.srvCategoria.consultaDoble(where('anio','==',Number(this.anioSelected)),where('categoria.nombre','==',this.ternaSelected))
      .subscribe(x =>{
        this.listaNominados=x
        this.listaNominados=this.listaNominados[0].nominados
      })
    }
    
  }





}
