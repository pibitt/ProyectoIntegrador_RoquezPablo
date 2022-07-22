// ASI FUNCIONA
// import { Component, OnInit } from '@angular/core';
// import { persona } from 'src/app/model/persona.model';
// import { PersonaService } from 'src/app/service/persona.service';

// @Component({
//   selector: 'app-about',
//   templateUrl: './about.component.html',
//   styleUrls: ['./about.component.css']
// })


// export class AboutComponent implements OnInit {
//   persona: persona =  new persona("","","", "", "", "")  
  
//   constructor(public personaService:PersonaService) { }

//   ngOnInit(): void {
//     this.personaService.getPersona().subscribe(data => {this.persona = data})
//   }

// }


import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})


export class AboutComponent implements OnInit {
  pers: persona []=[];  
  
  constructor(private personaService:PersonaService, private tokenService: TokenService) { }

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
