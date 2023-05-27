import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdenParteDTO } from '../model/OrdenParteDTO';

@Injectable({
  providedIn: 'root'
})
export class OrdenParteService {
  readonly token='eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMS05LTYiLCJzdWIiOiI3NzM5MTUwNyIsIkROSSI6Ijc3MzkxNTA3IiwiSWRNb2R1bG8iOiI5IiwiSWRFbXByZXNhIjoiMSIsIklkUGVyZmlsIjoiMCIsIklkVXN1YXJpbyI6IjYiLCJOb21icmVzIjoiSlVOSU9SIEpIT05ZIiwiQXBlbGxpZG9NYXRlcm5vIjoiUk9OQ0FMIiwiQXBlbGxpZG9QYXJ0ZXJubyI6Ik1BTFBBUlRJREEiLCJOb21icmVFbXByZXNhIjoiRU1QUkVTQSBNRVRBTCBNRUNBTklDQSBTQSIsIlBlcmZpbCI6IkFETUlOSVNUUkFET1IgTU9EVUxPIFBST0RVQ0NJT04iLCJTdHJJZFBlcmZpbGVzIjoiMCIsImp0aSI6IjVlNDcxZmRkLTIxZTgtNGQzNy1iMzQyLTE2NTNjOTY4YjYwNiIsImlhdCI6IjIwLzA1LzIwMjMgMDM6NDY6MzYgYS5tLiIsIm5iZiI6MTY4NDU1NDM5NiwiZXhwIjoxNjg0NTU3OTk2LCJpc3MiOiJodHRwOi8vd3d3LmFwcHMuZW1lbXNhLmNvbS80NDMzMS9zZXJpdmNlL211bHRpcGxlIiwiYXVkIjoiQVVESUVOQ0lBIEczTTM1QSAifQ.HdnxKDr8mb0WRcCDOnGu4xOQ4tAAju-7D1fSfiCe0GI';
  constructor(private http:HttpClient)
  {

  }
  listarOrdenProcesoAsync(IdEmpresa: number, IdTipOrd: number, IdNumOrd: number, ItemProceso: number): Observable<OrdenParteDTO> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    
    return this.http.get<OrdenParteDTO>(`http://apps.ememsa.com/serviciowebproduccion/api/OrdenParte/orden-Proceso-list/${IdEmpresa}/${IdTipOrd}/${IdNumOrd}/${ItemProceso}`,{headers});
  }
}
