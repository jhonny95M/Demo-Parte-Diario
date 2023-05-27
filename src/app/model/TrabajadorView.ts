export class TrabajadorView {
    IsSel: boolean;
    codTrab!: string;
    codTipDocIden!: string;
    num!: string;
    apePat!: string;
    apeMat!: string;
    nom!: string;
    nomTrab!: string;
    DNI!: string;
    constructor(){
        this.IsSel=false;
    }
  
    get Trabajador(): string {
      return `${this.apePat?.trim()} ${this.apeMat?.trim()} ${this.nom?.trim()}`;
    }
  }
  