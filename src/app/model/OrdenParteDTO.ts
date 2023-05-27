import { OrdenProcesoOperarioDTO } from "./OrdenProcesoOperarioDTO ";

export class OrdenParteDTO {
    public idEmpresa: number;
    public idTipOrd: number;
    public idNumOrd: number;
    public secuencia: number;
    public idCenCos: number;
    public idUsuario: number;
    public inicio: Date;
    public termino: Date | null;
    public cantidad: number;
    public cantidadKilo: number;
    // public get tiempo(): number {
    //   return this.termino ? Math.round((this.termino.getTime() - this.inicio.getTime()) / (1000 * 60 * 60) - this.tiempoParada * 100) / 100 : 0;
    // }
    // public get tiempoParada(): number {
    //   return this.ordenParteParadaDTOs && this.ordenParteParadaDTOs.length ? this.ordenParteParadaDTOs.reduce((total, x) => total + x.tiempo, 0) : 0;
    // }
    // public operario: number;
    // public get falla(): number {
    //   return this.ordenParteFallaDTOs && this.ordenParteFallaDTOs.length ? this.ordenParteFallaDTOs.reduce((total, x) => total + x.cantidad, 0) : 0;
    // }
    // public get fallaKilo(): number {
    //   return this.ordenParteFallaDTOs && this.ordenParteFallaDTOs.length ? this.ordenParteFallaDTOs.reduce((total, x) => total + x.cantidadKilo, 0) : 0;
    // }
    // public get retorno(): number {
    //   return this.ordenParteRetornoDTOs && this.ordenParteRetornoDTOs.length ? this.ordenParteRetornoDTOs.reduce((total, x) => total + x.cantidad, 0) : 0;
    // }
    // public get retornoKilo(): number {
    //   return this.ordenParteRetornoDTOs && this.ordenParteRetornoDTOs.length ? this.ordenParteRetornoDTOs.reduce((total, x) => total + x.cantidadKilo, 0) : 0;
    // }
    public fecha: Date;
    public observacion: string;
    public idTurnoPro: number;
    public codigoReferencia: string;
    public referencia: string;
    public desReferencia: string;
    public desTurnoPro: string;
    public fechaActualSistema: Date | null;
    public porConteo: boolean;
    public porCerrarPorceso: boolean;
    public esCompleto: boolean;
    public nomTrab: string;
    public pzaHora: number;
    public porEfic: number;
    public keyReferencia: string;
    public desTipOrd: string;
    public nomUnidadNegocio: string;
    public nomPersona: string;
    public ordenProcesoOperarioDTOs: OrdenProcesoOperarioDTO[] = [];
  
    constructor() {
      this.idEmpresa = 0;
      this.idTipOrd = 0;
      this.idNumOrd = 0;
      this.secuencia = 0;
      this.idCenCos = 0;
      this.idUsuario = 0;
      this.inicio = new Date();
      this.termino = null;
      this.cantidad = 0;
      this.cantidadKilo = 0;
      this.fecha = new Date();
      this.observacion = '';
      this.idTurnoPro = 0;
      this.codigoReferencia = '';
      this.referencia = '';
      this.desReferencia = '';
      this.desTurnoPro = '';
      this.fechaActualSistema = null;
      this.porConteo = false;
      this.porCerrarPorceso = false;
      this.esCompleto = false;
      this.nomTrab = '';
      this.pzaHora = 0;
      this.porEfic = 0;
      this.keyReferencia = '';
      this.desTipOrd = '';
      this.nomUnidadNegocio = '';
      this.nomPersona = '';
    }
  }
  