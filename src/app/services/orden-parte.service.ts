import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdenParteDTO } from '../model/OrdenParteDTO';
import { TrabajadorView } from '../model/TrabajadorView';

@Injectable({
  providedIn: 'root'
})
export class OrdenParteService {
  private token:string;
  constructor(private http:HttpClient)
  {
    this.token=localStorage.getItem('token') as string;
  }
  listarOrdenProcesoAsync(IdEmpresa: number, IdTipOrd: number, IdNumOrd: number, ItemProceso: number): Observable<OrdenParteDTO> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    
    return this.http.get<OrdenParteDTO>(`http://apps.ememsa.com/serviciowebproduccion/api/OrdenParte/orden-Proceso-list/${IdEmpresa}/${IdTipOrd}/${IdNumOrd}/${ItemProceso}`,{headers});
  }
  ObtenerTrabajador(idEmpresa:number, codOperario:string):Observable<TrabajadorView>{
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    
    return this.http.get<TrabajadorView>(`http://apps.ememsa.com/serviciowebproduccion/api/OrdenParte/get-trabajdor/${idEmpresa}/${codOperario}`,{headers});

  }
}
