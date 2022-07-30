import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {

  nombreEdu: string = '';
  descripcionEdu: string = '';
  constructor(private eduService:EducacionService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const educacion = new Educacion(this.nombreEdu, this.descripcionEdu);
    this.eduService.save(educacion).subscribe(
      data=>{
        alert('Educacion añadida correctamente');
        this.router.navigate(['']);
      },err=>{
        alert('Error al añadir la educación');
        this.router.navigate(['']);
      }
      )
  }

}
