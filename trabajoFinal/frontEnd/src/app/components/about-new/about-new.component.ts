import { Component, OnInit } from '@angular/core';
import { PersonaNuevo } from 'src/app/model/persona-nuevo';
import { SPersonaNuevoService } from 'src/app/service/s-persona-nuevo.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-about-new',
  templateUrl: './about-new.component.html',
  styleUrls: ['./about-new.component.css']
})
export class AboutNewComponent implements OnInit {

  pers: PersonaNuevo []=[];  
  
  constructor(private personaService:SPersonaNuevoService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarPersona();
    
    if (this.tokenService.getToken()){
      this.isLogged=true;
    }else {
      this.isLogged=false;
    }
  }

  cargarPersona():void{
    this.personaService.lista().subscribe(data => {this.pers = data;})
    
  }

}
