import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthenticateRequest } from '../interface/AuthenticateRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = 'https://api.example.com/tipo-referencia'; // URL de la API
  constructor(private http: HttpClient) { }

  getAuthenticationState(): Observable<any> {
    return this.http.get<string[]>(`${this.apiUrl}/tipos`);
  }
  AthenticateByEmpresaAsync(user:AuthenticateRequest|null):Observable<any>{
    return this.http.get<string[]>(`${this.apiUrl}/tipos`);
  }
  LoginAsync(user:AuthenticateRequest|null):Observable<any>{
    return this.http.get<string[]>(`${this.apiUrl}/tipos`);
  }
}
