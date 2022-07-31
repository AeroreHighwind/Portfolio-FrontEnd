import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.component.html',
  styleUrls: ['./edit-perfil.component.css']
})
export class EditPerfilComponent implements OnInit {

  persona:persona = new persona("","","","","","","","","","","");

  constructor(private perService:PersonaService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.perService.traerPersona().subscribe(
      data => {
        this.persona = data;
      },err=>{
        alert("Error al obtener la persona");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.perService.update(id, this.persona).subscribe(
      data => {
        this.router.navigate(['']);
      },err=>{
        alert("Error al modificar la persona");
        this.router.navigate(['']);
      }
    )
  }

}
