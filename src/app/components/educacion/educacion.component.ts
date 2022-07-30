import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';
import { TokenService } from 'src/app/services/token.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  
  educacion: Educacion[] = [];

  constructor(private eduService: EducacionService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else 
    {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void{
    this.eduService.lista().subscribe(
      data =>
      {
        this.educacion = data;
      }
    )
  }

  delete(id?: number){
    if( id != undefined){
      this.eduService.delete(id).subscribe(
        data => 
        {
          this.cargarEducacion();
        }, err => {
          alert("No se pudo eliminar el item especificado");
        }
      )
    }
  }
}
