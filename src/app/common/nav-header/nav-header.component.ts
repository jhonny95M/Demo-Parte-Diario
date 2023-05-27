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
}
