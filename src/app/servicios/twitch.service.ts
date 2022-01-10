import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TwitchLoginService } from './twitch-login.service';


@Injectable({
  providedIn: 'root'
})
export class TwitchService {
  

  data:Observable<any>=new Observable

  TWITCH_API_URL:string="https://api.twitch.tv/helix";

  yourHeader: HttpHeaders
  userToken=JSON.parse(localStorage.getItem('user') as string)?.token


  constructor(public http:HttpClient) { 
      const token=JSON.parse(localStorage.getItem('user') as string)?.token

      this.yourHeader = new HttpHeaders({
        'Authorization': `Bearer ${this.userToken}`,
        'Client-Id': environment.twitchToken
      });
      //this.data=this.http.get('https://api.twitch.tv/helix/users?login=duendepablo',{ headers: yourHeader })
      //this.data=this.http.get('https://api.twitch.tv/helix/search/channels?query=duende',{ headers: yourHeader })
      
      //this.data.subscribe(x=>console.log(x))
  }

  search(query:string,campo:string):Observable<any>{
  
    
    let queryUrl:string=`${this.TWITCH_API_URL}${campo}?${query}`;
    this.data=this.http.get(queryUrl,{ headers: this.yourHeader })
    return  this.data

  }


  
}
