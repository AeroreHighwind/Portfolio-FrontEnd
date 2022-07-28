import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';
import { NuevoUsuario } from '../model/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
authURL = 'http://localhost:8080/auth/';

  constructor(private htppClient:HttpClient) { }

  public nuevo(nuevoUsuario:NuevoUsuario): Observable<any>{
    return this.htppClient.post<any>(this.authURL+'nuevo',nuevoUsuario);
  }

  public login(loginUsuario:LoginUsuario): Observable<JwtDto>{
    return this.htppClient.post<JwtDto>(this.authURL+'login',loginUsuario);
  }
}
