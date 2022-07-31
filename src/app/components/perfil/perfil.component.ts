import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {


  persona: persona = new persona("","","","","","","","","","","");
  
  constructor(private personaService: PersonaService, private tokenService:TokenService) { }

  isLogged = false;

  ngOnInit(): void {

    this.cargarPerfil();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else 
    {
      this.isLogged = false;
    }

  }

  cargarPerfil(): void{
    this.personaService.traerPersona().subscribe(data => {
      this.persona = data;
  });
  }

}
