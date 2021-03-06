import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TwitchLoginService } from 'src/app/servicios/twitch-login.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  avatar:any=null
  _auth: any
  set auth(value) {
    this._auth = value;
    this.srvTwitch.localItem = value;
  }

  get auth() {
    let obj
    if(this.srvTwitch.localItem){
      obj=JSON.parse(this.srvTwitch.localItem)
    }
    return this._auth = obj;
  }
  currentRoute:any
  navbarAbsolute:boolean=true;
  

  constructor(private srvTwitch:TwitchLoginService,
    private router:Router) {
      this.checkCurrentUrl();
  }

  ngOnInit(): void {
  }
  checkCurrentUrl(){
    this.router.events.pipe(filter((event:any) => event instanceof NavigationEnd))
    .subscribe(e => {
      this.currentRoute = e.url;
      switch(this.currentRoute){
        case "/":
          this.navbarAbsolute=true
          break;
        default:
          this.navbarAbsolute=false
          break;
      }
    });
  }

  
  
  
  


}
