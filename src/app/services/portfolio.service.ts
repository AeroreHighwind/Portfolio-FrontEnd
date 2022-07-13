import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { }

  obtenerDatos() : Observable<any>{
  console.log("El servicio esta corriendo");
  return this.http.get('./assets/data/optimized_data.json');
}

}

