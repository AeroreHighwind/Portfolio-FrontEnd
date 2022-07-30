import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {

  nombrePro: string = '';
  descripcionPro: string = '';
  constructor(private proService:ProyectoService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const expe = new Proyecto(this.nombrePro, this.descripcionPro);
    this.proService.save(expe).subscribe(
      data=>{
        alert('Proyecto creado correctamente');
        this.router.navigate(['']);
      },err=>{
        alert('Error al crear Proyecto');
        this.router.navigate(['']);
      }
      )
  }

}
