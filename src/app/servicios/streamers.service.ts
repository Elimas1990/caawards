import { Injectable } from '@angular/core';
import { collection, collectionChanges, collectionData, doc, Firestore, query, setDoc, where } from '@angular/fire/firestore';
//import { AngularFireStorage } from '@angular/fire/compat/storage';

import { Observable } from 'rxjs';
import { ref, getStorage, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getDoc, getDocs } from 'firebase/firestore';


@Injectable({
  providedIn: 'root'
})
export class StreamersService {

  collec_streamers:any
  //filePath:string=''
  //downloadURL:Observable<string>=new Observable;
  storage=getStorage()
  listado_streamers: Observable<any>

  constructor(firestore:Firestore ) { 
    this.collec_streamers = collection(firestore, 'streamer')
    this.listado_streamers = collectionData(this.collec_streamers);
  }

  getAll(){
    return this.listado_streamers;
  }

  async guardarStreamer(streamer:any){
    if(streamer.foto){
      const fileref=ref(this.storage,`streamers/${streamer.tag}`);
      const task=  uploadBytes(fileref,streamer.foto)
      task.finally(()=>{
        getDownloadURL(fileref).then(x=>{
            streamer.foto=x
            setDoc(doc(this.collec_streamers,streamer.tag),streamer)
        });
      })
    }else{
      streamer.foto='https://firebasestorage.googleapis.com/v0/b/voting-6eeec.appspot.com/o/picante.webp?alt=media&token=8cae4755-c5ad-4357-9b4f-479ba4c51058'
      setDoc(doc(this.collec_streamers,streamer.tag),streamer)
    }
    /*this.filePath=`streamers/${streamer.tag}`
    const ref=this.storage.ref(this.filePath);
    const task =this.storage.upload(this.filePath,streamer.foto);
    task.snapshotChanges().pipe(
        finalize(() => {
            this.downloadURL = ref.getDownloadURL();
            this.downloadURL.subscribe(x=>{
              streamer.foto=x
              // inserta en database
              setDoc(doc(this.collec_streamers,streamer.tag),streamer)
            });
        })
    ).subscribe();*/
      
  }

  async consultaSimple(campo:string,operador:any,valor:any){
    const q = query(this.collec_streamers, where(campo, operador, valor));
    const docSnap = await getDocs(q)
    let array:any=[]
    docSnap.forEach((doc)=>{
      array.push(doc.data());
    })
    return array
    //return collectionData(q,{idField:'iddoc'})
  }

  /*async fileHandler(streamer:any){
    const fileref=ref(this.storage,`streamers/${streamer.tag}`);
    const task=  uploadBytes(fileref,streamer.foto)
    task.finally(()=>{
      getDownloadURL(fileref).then(x=>{
        streamer.foto=x
              // inserta en database
              setDoc(doc(this.collec_streamers,streamer.tag),streamer)
      });
    })
    
  }*/
  


}
