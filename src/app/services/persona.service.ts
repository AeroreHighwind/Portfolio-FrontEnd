import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';



@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  URL = 'https://gaston-gallegos-portfolio.herokuapp.com/personas/';
  
  constructor(private httpClient: HttpClient) { }

  
public traerPersona():Observable<persona>{
  return this.httpClient.get<persona>(this.URL + 'traer/perfil');
}


public update(id:number,persona:persona):Observable<any>{
  return this.httpClient.put<any>(this.URL + `editar/${id}`, persona);
}

}
