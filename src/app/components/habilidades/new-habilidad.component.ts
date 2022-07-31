import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/services/habilidad.service';

@Component({
  selector: 'app-new-habilidad',
  templateUrl: './new-habilidad.component.html',
  styleUrls: ['./new-habilidad.component.css']
})
export class NewHabilidadComponent implements OnInit {

  nombreH: string = '';
  descripcionH: string = '';
  porcentaje: number = 0;
  hard: boolean = false;
  imgURL: string = '';
  constructor(private habService:HabilidadService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const habilidad = new Habilidad(this.nombreH, this.porcentaje, this.hard,this.imgURL);
    this.habService.save(habilidad).subscribe(
      data=>{
        alert('Habilidad añadida correctamente');
        this.router.navigate(['']);
      },err=>{
        alert('Error al añadir la habilidad');
        this.router.navigate(['']);
      }
      )
  }

}
