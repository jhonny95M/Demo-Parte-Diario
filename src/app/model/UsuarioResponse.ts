import { PerfilEmpresaDTO } from "../interface/PerfilEmpresaDTO";

export class UsuarioResponse {
    IdUsuario!: number;
    DNI!: string;
    IdEmpresa!: number;
    EmpSpeed: string = "EM";
    IdModulo!: number;
    NombreEmpresa!: string;
    Nombres!: string;
    ApellidoMaterno!: string;
    ApellidoParterno!: string;
    AccessToken!: string;
    RefreshToken!: string;
    Foto!: Uint8Array;
    IdPerfil!: number;
    Perfil!: string;
    Expire!: Date;
    TipoCambio!: number;
    PerfilEmpresaDTOs!: PerfilEmpresaDTO[];
    get IdPerfiles(): number[] {
      try {
        if (this.StrIdPerfiles != null) {
          const lst = this.StrIdPerfiles.split('-');
          return lst.map(c => parseInt(c));
        } else {
          return [];
        }
      } catch (error) {
        if (this.IdModulo !== 9) {
          return [];
        } else {
          throw new Error("Error en obtener los perfiles");
        }
      }
    }
    StrIdPerfiles!: string;
  }
  