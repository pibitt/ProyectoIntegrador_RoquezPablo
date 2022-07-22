import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAboutNewComponent } from './components/about-new/edit-about-new.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditProyectoComponent } from './components/projects/edit-proyecto.component';
import { NewProyectoComponent } from './components/projects/new-proyecto.component';
import { EditSkillsComponent } from './components/skills/edit-skills.component';
import { NewSkillsComponent } from './components/skills/new-skills.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent },
  { path: 'nuevaedu', component: NewEducacionComponent },
  { path: 'nuevopro', component: NewProyectoComponent },
  { path: 'nuevaskill', component: NewSkillsComponent },
  { path: 'editedu/:id', component: EditEducacionComponent },
  { path: 'editpro/:id', component: EditProyectoComponent },
  { path: 'editskill/:id', component: EditSkillsComponent },
  { path: 'editexp/:id', component: EditExperienciaComponent },
  { path: 'editpersona/:id', component: EditAboutNewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
