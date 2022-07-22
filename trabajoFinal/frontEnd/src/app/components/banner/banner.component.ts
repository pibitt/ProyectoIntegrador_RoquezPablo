import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(private tokenService: TokenService) { }

  // ngOnInit(): void {
  // }
  isLogged = false;
  

  ngOnInit(): void {

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  
}


