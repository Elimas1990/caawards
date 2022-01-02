import { Injectable } from '@angular/core';
import { query,collection, Firestore, addDoc,  where, collectionData, doc } from '@angular/fire/firestore';
import { setDoc } from 'firebase/firestore';



@Injectable({
  providedIn: 'root'
})
export class TwitchLoginService {

  public twitchLogger:  any ;
  private _localItem: any;
  collec_usuario:any;

  constructor(firestore:Firestore) { 
    this.collec_usuario = collection(firestore, 'user');

  }

  twitchCallback($event:any)  {
    this.twitchLogger = $event;
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
    //addDoc(this.collec_usuario,Object.assign(this.twitchLogger,obj))
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
