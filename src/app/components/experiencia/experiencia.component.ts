import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExpService } from 'src/app/services/exp-service.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  exp:Experiencia[] = [];
  constructor(private expService:ExpService,private tokenService:TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
    else{
      this.isLogged = false;
    }

  }

cargarExperiencia(): void {
  this.expService.lista().subscribe(
    (data) => {
      this.exp = data;
    }
  );
}

delete(id?: number){
  if(id != undefined){
    this.expService.delete(id).subscribe(
      data => {
        this.cargarExperiencia();
      }, err => {
        alert("No se pudo borrar la experiencia");
      }
    )
  }
}
}
