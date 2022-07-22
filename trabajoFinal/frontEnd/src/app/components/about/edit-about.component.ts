// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-edit-about',
//   templateUrl: './edit-about.component.html',
//   styleUrls: ['./edit-about.component.css']
// })
// export class EditAboutComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {

  pers: persona = null;

  constructor(private Spersona: PersonaService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.Spersona.getPersona().subscribe(
      data =>{
        this.pers = data;
      }, err =>{        
        alert ('Error al traer datos personales')
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    
    this.Spersona.update(id, this.pers).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert ("Error al edi");
        this.router.navigate(['']);
      }
    )

  }

}
