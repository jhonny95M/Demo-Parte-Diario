export class OrdenProcesoOperarioDTO {
    public referencia: string;
    public idCargoPro: number;
    public desReferencia: string;
    public desCargoPro: string;
    public inicio: Date;
    public termino: Date | null;
    public get horas(): number {
      return this.termino ? Math.round((this.termino.getTime() - this.inicio.getTime()) / (1000 * 60 * 60) * 100) / 100 : 0;
    }
    public idEstado: number;
    public idUsuario: number;
  
    constructor(
      referencia: string,
      idCargoPro: number,
      desReferencia: string,
      desCargoPro: string,
      inicio: Date,
      termino: Date | null,
      idEstado: number,
      idUsuario: number
    ) {
      this.referencia = referencia;
      this.idCargoPro = idCargoPro;
      this.desReferencia = desReferencia;
      this.desCargoPro = desCargoPro;
      this.inicio = inicio;
      this.termino = termino;
      this.idEstado = idEstado;
      this.idUsuario = idUsuario;
    }
  }
  