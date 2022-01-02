import { Injectable } from '@angular/core';
import { Firestore,collectionData,collection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {


  listado: Observable<any>
  collec:any
  constructor(firestore:Firestore) {
    this.collec = collection(firestore, 'categorias');
    this.listado = collectionData(this.collec);
  }
  getAll(){
    return this.listado;
  }
}
