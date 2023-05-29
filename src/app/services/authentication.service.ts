import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthenticateRequest } from '../interface/AuthenticateRequest';
import { UsuarioResponse } from '../model/UsuarioResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = 'http://apps.ememsa.com/serviciowebacceso/api/acceso';//login/authenticate'; // URL de la API
  constructor(private http: HttpClient) { }

  getAuthenticationState(): Observable<any> {
    return this.http.get<string[]>(`${this.apiUrl}/tipos`);
  }
  AthenticateByEmpresaAsync(user:AuthenticateRequest|null):Observable<UsuarioResponse>{
    let keyValue =localStorage.getItem("accesTokenProduccion") as string;
    return this.http.post<UsuarioResponse>(`${this.apiUrl}/login/AuthenticateByEmpresa`,user,
    {headers:{"KeyForLoginAuthentication":keyValue}});
  }
  LoginAsync(user:AuthenticateRequest|null):Observable<UsuarioResponse>{
    return this.http.post<UsuarioResponse>(`${this.apiUrl}/login/authenticate`,user);
  }
}
