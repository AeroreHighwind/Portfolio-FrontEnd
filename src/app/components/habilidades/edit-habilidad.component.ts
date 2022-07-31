import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/services/habilidad.service';

@Component({
  selector: 'app-edit-habilidad',
  templateUrl: './edit-habilidad.component.html',
  styleUrls: ['./edit-habilidad.component.css']
})
export class EditHabilidadComponent implements OnInit {
  habilidad:Habilidad = null;

  constructor(private habService:HabilidadService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.habService.detail(id).subscribe(
      data => {
        this.habilidad = data;
      },err=>{
        alert("Error al obtener la habilidad");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.habService.update(id, this.habilidad).subscribe(
      data => {
        this.router.navigate(['']);
      },err=>{
        alert("Error al modificar la habilidad");
        this.router.navigate(['']);
      }
    )
  }

}

