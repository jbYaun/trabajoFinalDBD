export interface Cliente {
  id_cliente: number;
  nombres: string;
  apellidos: string;
  ruc: string;
  num_doc_ident: string;
  tipo_doc_ident: TipoDocIdent;
}

export interface TipoDocIdent {
  id_tipo_doc_ident: number;
  nombre: string;
}

export interface Medicamento {
  id_medicamento: number;
  nombre: String;
  precio: number;
  costo: number;
  cant_disponible: number;
  unidad: String;
  area: number;
  administracion: String;
  receta_obligatoria: Boolean;
  fecha_modif: String; /* Viene como DATE de la DB */
  laboratorio: Laboratorio ;
  estado: Estado;
}

export interface LoteMedicamento {
  id_loteMedic: number;
  medicamento: Medicamento;
  fecha_venc: Date; /* Viene como DATE de la DB */
  fecha_almac: Date; /* Viene como DATE de la DB */
  cantidad: number;
  pedido: Pedido;
  usuario: Usuario;
}

export interface RegistroVenta {
  lista: Medicamento[] ;
  nro_filas: number;
  id_usuario: number;
}

export interface Pedido {
  id_pedido: number;
  fecha: String; /* Viene como DATE de la DB */
  hora: String; /* Viene como TIME de la DB */
  costo_total: number;
  repartidor: Repartidor;
  estado: Estado;
  usuario: Usuario;
}

export interface Repartidor {
  id_repartidor: number;
  num_doc_ident: String;
  nombre: String;
  proveedor: Proveedor;
  tipo_doc_ident: TipoDocIdent;
}

export interface Estado {
  id_estado: number;
  nombre: String;
}

export interface Proveedor {
  id_proveedor: number;
  ruc: String;
  direccion: String;
  nombre: String;
}

export interface Usuario {
  id_usuario: number;
  apellidos: String;
  nombres: String;
  num_doc_ident: String;
  correo: String;
  contrasenia: String;
  tipo_doc_ident: TipoDocIdent;
}

export interface Laboratorio {
  id_laboratorio: number;
  ruc: String;
  nombre: String;
}

export interface RegistroUsuario{
  nombre: String;
  apellido: String;
  correo: String;
  contrasenia: String;
  num_doc_ident: String;
}
