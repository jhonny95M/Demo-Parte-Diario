export class AppSettings {
    public URL_LOCAL: string = "http://apps.ememsa.com/";
    public get ApiComercial(): string {
      return `${this.URL_LOCAL}serviciowebcomercial/api/`;
    }
    public get ApiProduccion(): string {
      return `${this.URL_LOCAL}serviciowebproduccion/api/`;
    }
    public get ApiAlmacen(): string {
      return `${this.URL_LOCAL}serviciowebalmacen/api/almacen/`;
    }
    public get ApiComun(): string {
      return `${this.URL_LOCAL}serviciowebcomun/api/comun/`;
    }
    public ApiAcceso: string = "http://localhost:44392/api/acceso/";
    public get ApiCompras(): string {
      return `${this.URL_LOCAL}serviciowebcompras/`;
    }
    public static ApiTercero: string = "http://apps.ememsa.com/webApiTerceros/api/";
    public get ApiContabilidad(): string {
      return `${this.URL_LOCAL}serviciowebcontabilidad/api/contabilidad/`;
    }
    public static REFRESH_TOKEN: string = "accesTokenProduccion";
    public static TOKEN: string = "tokenProduccion";
    public static ACCESS_TOKEN_EXPIRATION: string = "accesTokenExpiration";
    public static IdModulo: number = 9;
  }
  