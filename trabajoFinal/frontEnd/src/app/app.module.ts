import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { BannerComponent } from './components/banner/banner.component';

import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { NewProyectoComponent } from './components/projects/new-proyecto.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { EditProyectoComponent } from './components/projects/edit-proyecto.component';
import { EditSkillsComponent } from './components/skills/edit-skills.component';
import { NewSkillsComponent } from './components/skills/new-skills.component';

import { AboutNewComponent } from './components/about-new/about-new.component';
import { EditAboutNewComponent } from './components/about-new/edit-about-new.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    BannerComponent,

    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    
    
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEducacionComponent,
    NewProyectoComponent,
    EditEducacionComponent,
    EditProyectoComponent,
    EditSkillsComponent,
    NewSkillsComponent,

    AboutNewComponent,
    EditAboutNewComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
