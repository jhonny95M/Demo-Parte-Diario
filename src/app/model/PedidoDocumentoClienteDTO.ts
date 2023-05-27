class PedidoDocumentoClienteDTO {
    private _idTipDocCliente: number;
    private _nroDocumento: string;
    private _adjuntaFile: number;
    private _file: Uint8Array;
    private _crud: ActionData = ActionData.Create;
  
    constructor(){
        this._idTipDocCliente=0;
        this._nroDocumento='';
        this._adjuntaFile=0;
        this._file=new Uint8Array();
    }

    get idTipDocCliente(): number {
      return this._idTipDocCliente;
    }
    set idTipDocCliente(value: number) {
      this._idTipDocCliente = value;
    }
  
    get nroDocumento(): string {
      return this._nroDocumento;
    }
    set nroDocumento(value: string) {
      const noCharacters = [47, 58, 42, 34, 60, 62, 63, 92, 124];
      const containsNoCharacters = [...value].some((x) =>
        noCharacters.some((n) => x.charCodeAt(0) === n)
      );
      if (!containsNoCharacters) {
        if (value !== this._nroDocumento) {
          this._crud = ActionData.Create;
          this._nroDocumento = value;
        }
      }
    }
  
    get adjuntaFile(): number {
      return this._adjuntaFile;
    }
    set adjuntaFile(value: number) {
      this._adjuntaFile = value;
    }
  
    get file(): Uint8Array {
      return this._file;
    }
    set file(value: Uint8Array) {
      this._file = value;
    }
  
    get crud(): ActionData {
      return this._crud;
    }
    set crud(value: ActionData) {
      this._crud = value;
    }
  }