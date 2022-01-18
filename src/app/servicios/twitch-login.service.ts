import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { query,collection, Firestore, addDoc,  where, collectionData, doc } from '@angular/fire/firestore';
import { setDoc } from 'firebase/firestore';
import { DocumentData } from 'rxfire/firestore/interfaces';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class TwitchLoginService {

  public twitchLogger:  any ;
  private _localItem: any;
  collec_usuario:any;
  public twitchLogger2 = new BehaviorSubject<object>({})

  yourHeader: HttpHeaders

  constructor(firestore:Firestore,
    public http:HttpClient) { 
    this.collec_usuario = collection(firestore, 'user');
  }

  
  twitchCallback($event:any)  {
    this.twitchLogger = $event;
    this.twitchLogger2.next($event) //= new Observable<DocumentData>(x=> x.next($event))
    localStorage.setItem('user',JSON.stringify(this.twitchLogger));
    let type_user='';

    switch(this.twitchLogger.login){
      case "muxer":
        type_user='admin';
      break;
      default:
        type_user='standard';
      break;
    }
    let obj={
      tipo_user:type_user
    }
    setDoc(doc(this.collec_usuario,this.twitchLogger.id),Object.assign(this.twitchLogger,obj))
  }

  twitchLogout()  {
    localStorage.removeItem('user')
  }

  set localItem($event:any) {
    this.twitchLogger = $event;
    this._localItem = JSON.stringify(this.twitchLogger);
    localStorage.setItem('user',this._localItem);
    
  }

  get localItem() {
    return this._localItem = localStorage.getItem('user') || ''
  }

  

}
