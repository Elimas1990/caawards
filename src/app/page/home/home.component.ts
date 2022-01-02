import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  img_banner=["../../../assets/img/banner_ca2021.png",
  "../../../assets/img/banner_ca2020.png",
  "../../../assets/img/banner_ca2019.jpg"]
  constructor() { }


  ngOnInit(): void {
    this.img_banner.forEach(element => {
      
    });
    
  }

}
