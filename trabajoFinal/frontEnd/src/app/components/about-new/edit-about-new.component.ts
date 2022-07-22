import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaNuevo } from 'src/app/model/persona-nuevo';
import { SPersonaNuevoService } from 'src/app/service/s-persona-nuevo.service';

@Component({
  selector: 'app-edit-about-new',
  templateUrl: './edit-about-new.component.html',
  styleUrls: ['./edit-about-new.component.css']
})
export class EditAboutNewComponent implements OnInit {pers: PersonaNuevo = null;

  constructor(private sPersonaNuevo: SPersonaNuevoService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPersonaNuevo.detail(id).subscribe(
      data =>{
        this.pers = data;
      }, err =>{        
        alert ('Error al editar la persona')
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPersonaNuevo.update(id, this.pers).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert ("Error al editar la persona");
        this.router.navigate(['']);
      }
    )

  }

}
