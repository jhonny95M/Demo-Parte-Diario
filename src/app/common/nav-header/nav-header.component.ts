import { Component } from '@angular/core';
import { AxuAuthenticateState } from 'src/app/model/AxuAuthenticateState ';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent {
  TimeElapsed!:string;
  TipoCambio!:Number;
  AxuAuthenticateState!:AxuAuthenticateState;
  constructor(){
    let state=new AxuAuthenticateState();
    state.apellidoParterno="Malpartida";
    state.apellidoMaterno="Roncal";
    state.nombres="Junior";
    state.perfil="Analista Programador";
    this.AxuAuthenticateState=state;
  }
}
