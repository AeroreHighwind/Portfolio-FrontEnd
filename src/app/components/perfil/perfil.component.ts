import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  miPortfolio:any;
  persona: persona = new persona("","","","","","", "");
  constructor(private datosPortfolio: PortfolioService,private personaService: PersonaService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.miPortfolio = data;
  });
  this.personaService.traerPersona().subscribe(data => {
    this.persona = data;
});
  }

}
