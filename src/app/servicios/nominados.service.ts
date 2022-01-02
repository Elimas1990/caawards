import { Injectable } from '@angular/core';
import { query,collection, Firestore, addDoc,  where, collectionData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class NominadosService {

  collec_nominados:any
  nombre_coleccion:string='nominados'

  constructor(firestore:Firestore) {
    this.collec_nominados = collection(firestore, this.nombre_coleccion);
  }

  consoltarNominados(campo:string,operador:any,valor:any){
    const q = query(this.collec_nominados, where(campo, operador, valor));
    //console.log(typeof where(campo, operador, valor))
    return collectionData(q,{idField:'iddoc'})
  }
}
