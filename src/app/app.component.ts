import { Component, OnInit } from '@angular/core';
import { TwitchLoginService } from './servicios/twitch-login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit {  
	public outCb:  any;
  
	constructor(private srvTwitch:TwitchLoginService){}
	
	ngOnInit() {
	
	}

	/** Callback Data **/
	enviarTwitch($event:any)  {
    this.srvTwitch.twitchCallback($event)
  }

  mostrarUsuario(){
    
  }

  
}