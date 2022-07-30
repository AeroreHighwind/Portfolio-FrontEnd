import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {

  proyecto:Proyecto = null;

  constructor(private proService:ProyectoService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proService.detail(id).subscribe(
      data => {
        this.proyecto = data;
      },err=>{
        alert("Error al obtener el proyecto");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.proService.update(id, this.proyecto).subscribe(
      data => {
        this.router.navigate(['']);
      },err=>{
        alert("Error al modificar el proyecto");
        this.router.navigate(['']);
      }
    )
  }

}
