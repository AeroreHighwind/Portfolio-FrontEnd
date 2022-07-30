import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  pro:Proyecto[] = [];

  constructor(private proService:ProyectoService, private tokenService:TokenService) { }
  isLogged = false;
  
  ngOnInit(): void {

    this.cargarProyecto();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
    else{
      this.isLogged = false;
    }

  }

cargarProyecto(): void {
  this.proService.lista().subscribe(
    (data) => {
      this.pro = data;
    }
  );
}

delete(id?: number){
  if(id != undefined){
    this.proService.delete(id).subscribe(
      data => {
        this.cargarProyecto();
      }, err => {
        alert("No se pudo borrar el proyecto");
      }
    )
  }
}

}
