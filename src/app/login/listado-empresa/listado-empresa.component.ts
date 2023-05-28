import { Component,Output,EventEmitter,Input } from '@angular/core';
import { PerfilEmpresaDTO } from 'src/app/interface/PerfilEmpresaDTO';

@Component({
  selector: 'app-listado-empresa',
  templateUrl: './listado-empresa.component.html',
  styleUrls: ['./listado-empresa.component.css']
})
export class ListadoEmpresaComponent {
  idEmpresa:number=-1;
@Output() OnAceptar=new EventEmitter<number>();
@Input() perfilEmpresaDTOs!:PerfilEmpresaDTO[];
onClick():void{
  this.OnAceptar.emit(this.idEmpresa);
}
}
