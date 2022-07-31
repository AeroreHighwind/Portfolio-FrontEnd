import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/services/habilidad.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habilidades: Habilidad[] = [];

  constructor(private habService: HabilidadService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    
    this.cargarHabilidad();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else 
    {
      this.isLogged = false;
    }
  }

  cargarHabilidad(): void{
    this.habService.lista().subscribe(
      data =>
      {
        this.habilidades = data;
      }
    )
  }

  delete(id?: number){
    if( id != undefined){
      this.habService.delete(id).subscribe(
        data => 
        {
          this.cargarHabilidad();
        }, err => {
          alert("No se pudo eliminar la habilidad");
        }
      )
    }
  }
}


