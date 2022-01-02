import { Injectable } from '@angular/core';
import { collection, collectionChanges, collectionData, doc, Firestore, setDoc } from '@angular/fire/firestore';
//import { AngularFireStorage } from '@angular/fire/compat/storage';

import { Observable } from 'rxjs';
import { ref, getStorage, uploadBytes, getDownloadURL } from 'firebase/storage';


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
    const fileref=ref(this.storage,`streamers/${streamer.tag}`);
    const task=  uploadBytes(fileref,streamer.foto)
    task.finally(()=>{
      getDownloadURL(fileref).then(x=>{
          streamer.foto=x
          setDoc(doc(this.collec_streamers,streamer.tag),streamer)
      });
    })
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
