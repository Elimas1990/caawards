import { Injectable } from '@angular/core';
import { Firestore,collectionData,collection, setDoc, addDoc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {


  listado: Observable<any>
  collecCategoria:any
  constructor(firestore:Firestore) {
    this.collecCategoria = collection(firestore, 'categorias');
    this.listado = collectionData(this.collecCategoria);
  }
  getAll(){
    return this.listado;
  }

  guardarCategoria(categoria:any){
    return addDoc(this.collecCategoria,categoria)
  }
}
