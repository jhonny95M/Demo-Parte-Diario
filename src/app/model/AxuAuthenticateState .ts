export class AxuAuthenticateState {
    public backNavigate?: string;
    private tipoCambio: number = 0;
    public idUsuario: number = 0;
    public dni?: string;
    public idEmpresa: number = 0;
    public empresaSpeed: string = "EM";
    public nombreEmpresa?: string;
    public nombres?: string;
    public apellidoMaterno?: string;
    public apellidoParterno?: string;
    public idPerfil: number = 0;
    public perfil?: string;
    public accessToken?: string;
    public refreshToken?: string;
    public expire: Date = new Date();
    private idModulo: number = 9;
    public get nombreUsuario(): string {
      return `${this.apellidoParterno} ${this.apellidoMaterno} ${this.nombres}`;
    }
    private menus?: string[];
    public get Menus(): string[] | undefined {
      return this.menus;
    }
    public set Menus(value: string[] | undefined) {
      this.menus = value;
    }
    public idPerfiles: number[] = [];
  
    public cargarAxiliar(user: UsuarioResponse): void {
      if (user != null) {
        this.idUsuario = user.idUsuario;
        this.dni = user.dni;
        this.idEmpresa = user.idEmpresa;
        this.nombreEmpresa = user.nombreEmpresa;
        this.nombres = user.nombres;
        this.apellidoMaterno = user.apellidoMaterno;
        this.apellidoParterno = user.apellidoParterno;
        this.idPerfil = user.idPerfil;
        this.perfil = user.perfil;
        this.accessToken = user.accessToken;
        this.expire = new Date(user.expire);
        this.refreshToken = user.refreshToken;
        this.tipoCambio = user.tipoCambio;
        this.idPerfiles = user.idPerfiles;
      }
    }
  }
  
  export interface UsuarioResponse {
    idUsuario: number;
    dni?: string;
    idEmpresa: number;
    nombreEmpresa?: string;
    nombres?: string;
    apellidoMaterno?: string;
    apellidoParterno?: string;
    idPerfil: number;
    perfil?: string;
    accessToken?: string;
    expire: string;
    refreshToken?: string;
    tipoCambio: number;
    idPerfiles: number[];
  }
  