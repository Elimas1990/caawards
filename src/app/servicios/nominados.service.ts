import { Injectable } from '@angular/core';
import { query,collection, Firestore, addDoc,  where, collectionData, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NominadosService {

  collec_nominados:any
  listado_nominados:Observable<any>
  nombre_coleccion:string='ternas'

  constructor(firestore:Firestore) {
    this.collec_nominados = collection(firestore, this.nombre_coleccion);
    this.listado_nominados = collectionData(this.collec_nominados);
  }

  consultaSimple(campo:string,operador:any,valor:any){
    const q = query(this.collec_nominados, where(campo, operador, valor));
    
    return collectionData(q,{idField:'iddoc'})
  }

  consultaDoble(where1:any,where2:any){
    const q = query(this.collec_nominados,where1,where2);
    
    return collectionData(q,{idField:'iddoc'})
  }

  registrarNominados(obj:object){
    
    return addDoc(this.collec_nominados,obj)
    
  }

  getAll(){
    return this.listado_nominados;
  }
}
