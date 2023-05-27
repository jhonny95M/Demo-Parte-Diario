import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms'
import { TipoReferenciaService } from '../services/tipo-referencia.service';
import {MaquinaService} from '../services/maquina.service'
import {OrdenParteService} from '../services/orden-parte.service'
import { AuthenticationService} from '../services/authentication.service'
import {} from '@angular/platform-browser'
import {ExceptionCustom }from '../common/exception/ExceptionCustom'
import { OrdenParteDTO } from '../model/OrdenParteDTO';
import { Observable } from 'rxjs';
import { ErrorDialogComponent } from '../common/error-component/error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { OrdenProcesoOperarioDTO } from '../model/OrdenProcesoOperarioDTO ';
import { TrabajadorView } from '../model/TrabajadorView';


@Component({
  selector: 'app-inicio-produccion',
  templateUrl: './inicio-produccion.component.html',
  styleUrls: ['./inicio-produccion.component.css']
})
export class InicioProduccionComponent implements OnInit {

  formulario!: FormGroup;
  btnCambiarMaquinaEnabled = false;
  btnAgregarOperarioEnabled = false;
  btnOperarioPlanificadorEnabled = false;
  btnOperarioTareaEnabled = false;
  txtFechaWrite = false;
  ordenOperacion='';
  dataOperacion={
    IdEmpresa:1,
    IdTipOrd:0,
    IdNumOrd:0,
    ItemProceso:0
  };
  ExceptionData=ExceptionCustom;
  IsError=false;
  codOperario! :string | null;
  idEmpresa=1;
  
  constructor(
    private fb: FormBuilder,
    private tipoReferenciaService: TipoReferenciaService,
    private maquinaService: MaquinaService,
    private ordenParteService: OrdenParteService,
    private authenticationService: AuthenticationService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.checkFechaWriteAccess();
  }

  createForm(): void {
    this.formulario = this.fb.group({
      operacion: ['', Validators.required],
      maquina: ['', Validators.required],
      codOperario:[''],
      fecha: [''],
      idEmpresa : [0],
      idTipOrd : [0],
      idNumOrd : [0],
      secuencia : [0],
      idCenCos : [0],
      idUsuario :[0],
      inicio : [''],
      termino : [null],
      cantidad :[0],
      cantidadKilo : [0],
      observacion : [''],
      idTurnoPro : [0],
      codigoReferencia : [''],
      referencia : [''],
      desReferencia : [''],
      desTurnoPro :[''],
      fechaActualSistema : [null],
      porConteo : [false],
      nomTrab : [''],
      keyReferencia : [''],
      desProceso:[''],
      desProcesoEje:[''],
      ordenProcesoOperarioDTOs:this.fb.array([])
    });
  }
  get ordenProcesoOperarioDTOs2(): FormArray {
    return this.formulario.get('ordenProcesoOperarioDTOs') as FormArray;
  }
  async operacionKeyDown(event: KeyboardEvent): Promise<void> {
    if (event.code === 'Enter') {
      await this.buscarOperacionClickAsync();
      const authState = await this.authenticationService.getAuthenticationState();
      // const user = authState.User;
      // this.txtFechaWrite = user.IsInRole('txtFecha');
    }
  }
operario_KeyDown(event:KeyboardEvent):void{
  if(event.key!="Enter")return;
  try {
    if (this.codOperario?.length !== 7) return;
    this.ordenParteService.ObtenerTrabajador(this.idEmpresa, this.codOperario).subscribe((result : TrabajadorView)=>{
      if(result!=null && !(this.formulario.get('ordenProcesoOperarioDTOs')?.value as OrdenProcesoOperarioDTO[]).some(c=>c.referencia===result.codTrab)){
        let trab=new OrdenProcesoOperarioDTO();
        trab.idCargoPro=1;
        trab.referencia=result.codTrab;
        trab.desReferencia= `${result.apePat} ${result.apeMat} ${result.nom}`;
        const trabajador = this.fb.group({
          referencia: [trab.referencia, Validators.required],
          desReferencia: [trab.desReferencia, [Validators.required, Validators.email]],
          // Agrega más propiedades si es necesario
        });
    
        this.ordenProcesoOperarioDTOs2.push(trabajador);
        // (this.formulario.get('ordenProcesoOperarioDTOs')?.value as OrdenProcesoOperarioDTO[]).push(trab);
        console.log(this.ordenProcesoOperarioDTOs2.controls);
        console.log(this.ordenProcesoOperarioDTOs2.value);
        console.log(this.formulario.controls);
        console.log(this.formulario.value);
        this.codOperario = null;
      }
    },(error)=>{
      console.log(error);
    });
  } catch (ex) {
    console.log(ex);
  }
  
}
async formBuscarAsync():Promise<void>{

}
  async buscarOperacionClickAsync(): Promise<void> {
    this.createForm();
    await this.BuscarOperacionAsync();
    // console.log(this.formulario.get('operacion')?.value)
  }
 BuscarOperacionAsync():void{
  try
            {
                this.btnAgregarOperarioEnabled = false;
                this.btnCambiarMaquinaEnabled = false;
                this.btnOperarioPlanificadorEnabled = false;
                this.btnOperarioTareaEnabled = false;
                this.cargarIndicesOperacion();
                 this.ordenParteService.listarOrdenProcesoAsync(this.dataOperacion.IdEmpresa,
                    this.dataOperacion.IdTipOrd, this.dataOperacion.IdNumOrd, this.dataOperacion.ItemProceso)
                    .subscribe(ordendto=>{
                      this.formulario.patchValue(ordendto);
                    console.log(ordendto);
                    },(error)=>{
                      console.log(error)
                      const dialogRef = this.dialog.open(ErrorDialogComponent, {
                        data: { message: error.error.message } // Pasa el mensaje de error al componente del diálogo
                      });
                    });
                // StateHasChanged();
                // await JS.InvokeVoidAsync("disabledEnterForm");

                this.btnAgregarOperarioEnabled = true;
                this.btnCambiarMaquinaEnabled = true;
                this.btnOperarioPlanificadorEnabled = true;
                this.btnOperarioTareaEnabled = true;
            }
            catch (ex )
            {
              if(ex instanceof ExceptionCustom){
                // this.ExceptionData = ex as ExceptionCustom;
                this.IsError = true;
                // DialogService.Close();
                // Console.WriteLine(ex.Message);
              }
else if(ex instanceof Error){
  // ExceptionMessage = ex.Message;
  this.IsError = true;
  // DialogService.Close();

}
              }            
            finally
            {
                // if (IsError)
                // {
                //     if (ExceptionMessage is null)
                //         await ShowWarningDialog(ExceptionData);
                //     else
                //         await ErrorDialog(ExceptionMessage);
                // }
                // Console.WriteLine("FINALY");
            }
}

cargarIndicesOperacion() {
  const ordenSplit = this.ordenOperacion.split('-');
  this.dataOperacion.IdTipOrd = parseInt(ordenSplit[0]);
  this.dataOperacion.IdNumOrd = parseInt(ordenSplit[1]);
  this.dataOperacion.ItemProceso = parseInt(ordenSplit[2]);
}
  async buscarOperarioAsync(): Promise<void> {
    try {
      this.btnAgregarOperarioEnabled = false;
      this.btnCambiarMaquinaEnabled = false;
      this.btnOperarioPlanificadorEnabled = false;
      this.btnOperarioTareaEnabled = false;
      this.cargarIndicesOperacion();
    //   ordenParte = await ordenParteService.listarOrdenProceso(state.idEmpresa, ordenParte.idTipOrd, ordenParte.idNumOrd, ordenParte.itemProceso);
    //   stateHasChanged();
    //   await js.invokeVoidAsync("disabledEnterForm");
  
    //   btnAgregarOperarioEnabled = true;
    //   btnCambiarMaquinaEnabled = true;
    //   btnOperarioPlanificadorEnabled = true;
    //   btnOperarioTareaEnabled = true;
    } catch (ex) {
      // if (ex instanceof ExceptionCustom) {
      //   exceptionData = ex;
      //   isError = true;
      //   dialogService.close();
      //   console.log(ex.message);
      // } else {
      //   exceptionMessage = ex.message;
      //   isError = true;
      //   dialogService.close();
      // }
    }
    //  finally {
    //   if (isError) {
    //     if (exceptionMessage === null) {
    //       await showWarningDialog(exceptionData);
    //     } else {
    //       await errorDialog(exceptionMessage);
    //     }
    //   }
    //   console.log("FINALLY");
    // }
  }

  async cambiarMaquinaAsync(): Promise<void> {
    // Lógica para cambiar máquina
  }

  async operarioPlanificadorAsync(): Promise<void> {
    // Lógica para operario planificador
  }

  async operarioTareaAsync(): Promise<void> {
    // Lógica para operario de tarea
  }

  async agregarOperarioAsync(): Promise<void> {
    // Lógica para agregar operario
  }
async agregarMaquinaAsync():Promise<void>{

}
  async guardar(): Promise<void> {
    // Lógica para guardar
  }

  checkFechaWriteAccess(): void {
    // Lógica para verificar acceso a la escritura de la fecha
  }
  quitarOperario(item: number): void {
  
  }
  regresar():void{}
}


