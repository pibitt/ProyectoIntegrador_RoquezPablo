
import { Component, OnInit } from '@angular/core';
//import { educacion } from 'src/app/model/educacion.model';
//import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

export class EducacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


/*
export class EducacionComponent implements OnInit {
  educacion: educacion = new educacion ("",0,"","")

  constructor(public educacionService:EducacionService) { }

  ngOnInit(): void {
    this.educacionService.getEducacion().subscribe(data => {this.educacion = data})
  }

}
*/
