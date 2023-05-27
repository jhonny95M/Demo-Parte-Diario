 
  class PedidoDetalleDTO {
    constructor(
      public idPedido: number,
      public item: number,
      public idTipBloqueo: number,
      public idEstado: number,
      public itemPrecio: number,
      public codArticulo: string,
      public idListaPrecio: number,
      private cantidad: number,
      public cantidadAte: number,
      public precio: number,
      private precioNuevo: number,
      public Descuento: number,
      public DescuentoAdi: number,
      public Observacion: string = '',
      public precioOriginal: number,
      public NomArticulo: string,
      public CodUniMed: string,
      public MargenMinimo: number,
      public CantidadPendiente: number,
      public Saldo: number,
      public Sel: number,
      public IdMotivoNoAtencion: number,
      public CantidadNoVenta: number,
      private descuentoAut: number,
      private descuentoAdiAut: number,
      public Costo: number,
      public FecCosto: Date,
      public CantidadKilo: number,
      public Facturado: number,
      public PorFacturar: number,
      public Separado: number,
      public Requerimiento: string,
      public GuiaAlmacen: string,
      public GuiaRemision: string,
      public Comprobante: string,
      public SortGuiaRem: number,
      public CodArticuloSUNAT: string,
      public NomTipBloqueo: string,
      public NomPersona: string,
      public Referencia: string,
      public Crud: ActionData,
      public TieneObsequio: boolean
    ) {}
  
    get Cantidad(): number {
      return this.cantidad;
    }
    set Cantidad(value: number) {
      if (value !== this.cantidad && value >= 0) {
        this.cantidad = value;
      }
    }
  
    get PrecioNuevo(): number {
      return this.precioNuevo;
    }
    set PrecioNuevo(value: number) {
      if (value !== this.precioNuevo && value >= 0) {
        this.precioNuevo = value;
      }
    }
  
    get DescuentoAut(): number {
      return this.descuentoAut;
    }
    set DescuentoAut(value: number) {
      if (value >= 0 && value < 100) {
        this.descuentoAut = value;
      }
    }
  
    get DescuentoAdiAut(): number {
      return this.descuentoAdiAut;
    }
    set DescuentoAdiAut(value: number) {
      if (value >= 0 && value < 100) {
        this.descuentoAdiAut = value;
      }
    }
  
    get DescuentoGeneral(): number {
      return roundToDecimal(
        100 -
          ((100 - this.DescuentoAut) -
            ((100 - this.DescuentoAut) * this.DescuentoAdiAut) / 100),4
      );
    }
      
    get PrecioConDescuento(): number {
      return roundToDecimal(
        this.precio - (this.precio * (this.DescuentoGeneral / 100)),
        6
      );
    }
  
    get Margen(): number {
      return roundToDecimal(
        ((this.PrecioConDescuento - this.Costo) / this.PrecioConDescuento) * 100,
        2
      );
    }
  
    get Bruto(): number {
      return roundToDecimal(this.Cantidad * this.precio, 6);
    }
  
    get MontoDescuento(): number {
      return roundToDecimal(
        this.Cantidad * (this.precio - this.PrecioConDescuento),
        6
      );
    }
  
    get Venta(): number {
      return this.Bruto - this.MontoDescuento;
    }
    
      
    clonePedidoDetalleDTO(): PedidoDetalleDTO {
        return { ...this };
    //   return new PedidoDetalleDTO(
    //     this.idPedido,
    //     this.item,
    //     this.idTipBloqueo,
    //     this.idEstado,
    //     this.itemPrecio,
    //     this.codArticulo,
    //     this.idListaPrecio,
    //     this.cantidad,
    //     this.cantidadAte,
    //     this.precio,
    //     this.precioNuevo,
    //     this.Descuento,
    //     this.DescuentoAdi,
    //     this.Observacion,
    //     this.precioOriginal,
    //     this.NomArticulo,
    //     this.CodUniMed,
    //     this.MargenMinimo,
    //     this.CantidadPendiente,
    //     this.Saldo,
    //     this.Sel,
    //     this.IdMotivoNoAtencion,
    //     this.CantidadNoVenta,
    //     this.descuentoAut,
    //     this.descuentoAdiAut,
    //     this.Costo,
    //     this.FecCosto,
    //     this.CantidadKilo,
    //     this.Facturado,
    //     this.PorFacturar,
    //     this.Separado,
    //     this.Requerimiento,
    //     this.GuiaAlmacen,
    //     this.GuiaRemision,
    //     this.Comprobante,
    //     this.SortGuiaRem,
    //     this.CodArticuloSUNAT,
    //     this.NomTipBloqueo,
    //     this.NomPersona,
    //     this.Referencia,
    //     this.Crud,
    //     this.TieneObsequio
    //   );
    }
  }
  