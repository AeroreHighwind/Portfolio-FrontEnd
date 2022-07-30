import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { Page404Component } from './components/page404/page404.component';
import { LoginComponent } from './components/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { PerfilComponent } from './components/perfil/perfil.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { interceptorProvider } from './services/interceptor-service';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent,
    Page404Component,
    LoginComponent,
    PerfilComponent,
    HomeComponent,
    NewExperienciaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      radius: 50,
      outerStrokeWidth: 7,
      innerStrokeWidth: 3,
      showImage: true,
      outerStrokeColor: "#00ff6e",
      innerStrokeColor: "#242424",
      animationDuration: 300,
    })

  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
