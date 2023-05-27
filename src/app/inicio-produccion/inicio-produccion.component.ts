import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder,FormGroup,Validators} from '@angular/forms'
import { TipoReferenciaService } from '../services/tipo-referencia.service';
import {MaquinaService} from '../services/maquina.service'
import {OrdenParteService} from '../services/orden-parte.service'
import { AuthenticationService} from '../services/authentication.service'
import {} from '@angular/platform-browser'
import {ExceptionCustom }from '../common/exception/ExceptionCustom'
import { OrdenParteDTO } from '../model/OrdenParteDTO';


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

  
  constructor(
    private fb: FormBuilder,
    private tipoReferenciaService: TipoReferenciaService,
    private maquinaService: MaquinaService,
    private ordenParteService: OrdenParteService,
    private authenticationService: AuthenticationService
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
  get ordenProcesoOperarioDTOs(): FormArray {
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
async operario_KeyDown(event:KeyboardEvent):Promise<void>{

}
async formBuscarAsync():Promise<void>{

}
  async buscarOperacionClickAsync(): Promise<void> {
    this.createForm();
    await this.BuscarOperacionAsync();
    // console.log(this.formulario.get('operacion')?.value)
  }
async BuscarOperacionAsync():Promise<void>{
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
                    console.log(ordendto);
                    },(error)=>{
                      console.log(error)
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


