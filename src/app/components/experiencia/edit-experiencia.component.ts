import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExpService } from 'src/app/services/exp-service.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {

  expLab:Experiencia = null;

  constructor(private expService:ExpService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.expService.detail(id).subscribe(
      data => {
        this.expLab = data;
      },err=>{
        alert("Error al obtener la experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.expService.update(id, this.expLab).subscribe(
      data => {
        this.router.navigate(['']);
      },err=>{
        alert("Error al modificar la experiencia");
        this.router.navigate(['']);
      }
    )
  }

}
