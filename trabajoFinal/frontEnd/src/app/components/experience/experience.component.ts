// // no sirve, de Andrés. Lo reemplace por el de Mati



// // import { Component, OnInit } from '@angular/core';

// // @Component({
// //   selector: 'app-experience',
// //   templateUrl: './experience.component.html',
// //   styleUrls: ['./experience.component.css']
// // })
// // export class ExperienceComponent implements OnInit {

// //   constructor() { }

// //   ngOnInit(): void {
// //   }

// // }

// import { HttpErrorResponse } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { Experience } from 'src/app/model/experiencie';
// import { ExperienceService } from 'src/app/service/experience.service';


// @Component({
//   selector: 'app-experience',
//   templateUrl: './experience.component.html',
//   styleUrls: ['./experience.component.css']
// })
// export class ExperienceComponent implements OnInit {

// public experiences: Experience[]=[];
  
//   constructor(private experienceService: ExperienceService) { }

//   ngOnInit(): void {
//     this.getExperiences();
//   }

//   public getExperiences():void{
//     this.experienceService.getExperience().subscribe({
//       next:(Response: Experience[]) =>{
//         this.experiences=Response;
//       },
//       error:(error:HttpErrorResponse)=>{
//         alert(error.message)
//       }
//     })
//   }
// }
