class PedidoDTO {
    public IdEmpresa: number;
    public IdPedido: number;
    public IdCliente: number;
    public IdVendedor: number;
    public IdOrigen: number;
    public IdConPago: number;
    public IdMoneda: number;
    public AfectoImpuesto: boolean;
    public IdMonedaFactura: number;
    public IdUsuario: number;
    public IdEstado: number;
    public IdListaPrecio: number;
    public Fecha: Date;
    public Despacho: string;
    public PorImpuesto: number;
    public PedidoDetalles: PedidoDetalleDTO[];
    public PedidoDocClientes: PedidoDocumentoClienteDTO[];
  
    constructor() {
        this.IdEmpresa = 0;
    this.IdPedido = 0;
    this.IdCliente = 0;
    this.IdVendedor = 0;
    this.IdOrigen = 0;
    this.IdConPago = 0;
    this.IdMoneda = 0;
    this.AfectoImpuesto = false;
    this.IdMonedaFactura = 0;
    this.IdUsuario = 0;
    this.IdEstado = 0;
    this.IdListaPrecio = 0;
    this.Fecha = new Date();
    this.Despacho = "";
    this.PorImpuesto = 0;
    this.PedidoDetalles = [];
    this.PedidoDocClientes = [];
    }
  
    // public TotBruto(): number {
    //   return this.PedidoDetalles?.length
    //     ? this.roundToDecimal(
    //         this.PedidoDetalles
    //           .filter(n => n.Crud !== ActionData.Delete && n.Crud !== ActionData.IsObsequio)
    //           .reduce((total, x) => total + x.Bruto(), 0),
    //         2
    //       )
    //     : 0;
    // }
  
    // public TotDescuento(): number {
    //   return (
    //     (this.PedidoDetalles?.length
    //       ? this.roundToDecimal(
    //           this.PedidoDetalles
    //             .filter(n => n.Crud !== ActionData.Delete && n.Crud !== ActionData.IsObsequio)
    //             .reduce((total, r) => total + r.MontoDescuento(), 0),
    //           2
    //         )
    //       : 0)
    //   );
    // }
  
    // public TotVenta(): number {
    //   return this.TotBruto() - this.TotDescuento();
    // }
  
    // public TotImpuesto(): number {
    //   return this.roundToDecimal(this.TotVenta() * (this.PorImpuesto / 100), 2);
    // }
  
    // public TotNeto(): number {
    //   return this.TotVenta() + this.TotImpuesto();
    // }
  
    // public IdDocIdentidad: number;
    // public NomPersona: string;
    // public NumDocIdentidad: string;
    // public AbrDocIdentidad: string;
    // public CLICVE: string;
    // public IsCotizacion: boolean;
    // public NomVendedor: string;
    // public AGEVEN: string;
    // public IdTipReqAlm: number;
    // public IdReqAlm: number;
    // public FecSep: Date;
    // public FecAteAlm: Date;
    // public DiasSinFacturar: number;
    // public IsObsequio: boolean;
  
    // public IdTransportista: number | null;
    // public NomTran: string;
    // public NomConPago: string;
    // public CodEquiv: string;

    // public TotCosto(): number {
    //   return this.PedidoDetalles?.length
    //     ? this.roundToDecimal(
    //         this.PedidoDetalles
    //           .filter(n => n.Crud !== ActionData.Delete && n.Crud !== ActionData.IsObsequio)
    //           .reduce((total, r) => total + r.Costo * r.Cantidad, 0),
    //         2
    //       )
    //     : 0;
    // }
  
    // public TotMargen(): number {
    //   return this.TotVenta() !== 0
    //     ? this.roundToDecimal(((this.TotVenta() - this.TotCosto()) / this.TotVenta()) * 100, 2)
    //     : 0;
    // }
  
    // public Alias: string;
    // public DiasVigencia: number;
  
    // public ErrorNotificacion: string;
    // public TipoAutoriza: string;
    // public EmpSpd: string;
  
    // public IdInCoTerm: number;
    // public NomInCoTerm: string;
  
    // public IdMonedaListaPrecio: number;
    // public NomMoneda: string;
    // public NomMonedaFactura: string;
  
    // public EstAnxDireccion: string;
    // public NomDist: string;
    // public NomProv: string;
    // public NomDep: string;
    // public NomPais: string;
    // public Ubigeo: string;
    // public IsCotizacionPedido: boolean;
    // public MontoPedidoEnAlmacen: number;
  }