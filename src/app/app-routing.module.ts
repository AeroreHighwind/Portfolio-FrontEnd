import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './components/page404/page404.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto.component';
import { NewHabilidadComponent } from './components/habilidades/new-habilidad.component';
import { EditHabilidadComponent } from './components/habilidades/edit-habilidad.component';
import { EditPerfilComponent } from './components/perfil/edit-perfil.component';

const routes: Routes = [
  { path: '' , redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'nuevaexp', component: NewExperienciaComponent},
  { path: 'updateexp/:id', component: EditExperienciaComponent},
  { path: 'nuevaedu', component: NewEducacionComponent},
  { path: 'updateedu/:id', component: EditEducacionComponent},
  { path: 'nuevopro', component: NewProyectoComponent},
  { path: 'updatepro/:id', component: EditProyectoComponent},
  { path: 'nuevahab', component: NewHabilidadComponent},
  { path: 'updatehab/:id', component: EditHabilidadComponent},
  { path: 'updateper/:id', component: EditPerfilComponent},
  { path: '**', component: Page404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
