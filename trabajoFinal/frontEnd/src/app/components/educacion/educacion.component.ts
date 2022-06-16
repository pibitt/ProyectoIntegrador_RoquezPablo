import { Component, OnInit } from '@angular/core';
import { educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

export class EducacionComponent implements OnInit {  
  educacion: educacion =  new educacion("", 1 ,"", "") 
    
  constructor(public educacionService:EducacionService) { }
  ngOnInit(): void {
    this.educacionService.getEducacion().subscribe(data => {})
  }
}

// import { HttpErrorResponse } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { Educacion } from 'src/app/model/educacion.model';
// import { EducacionService } from 'src/app/service/educacion.service';

// @Component({
//   selector: 'app-educacion',
//   templateUrl: './educacion.component.html',
//   styleUrls: ['./educacion.component.css']
// })
// export class EducacionComponent implements OnInit {
//   public educaciones: Educacion[]=[];  
//   constructor(private educacionService:EducacionService) { }
//   ngOnInit(): void {
//     this.getEducaciones();
//   }
//   public getEducaciones():void{
//     this.educacionService.getEducacion().subscribe({
//       next:(Response: Educacion[]) =>{
//         this.educaciones=Response;
//       },
//       error:(error:HttpErrorResponse) => {
//         alert (error.message);
//       }
//     })
//   }
// }
