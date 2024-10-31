export interface Publicacion {
  publicacionId: number;
  // Add other fields as needed
}

export interface Calificacion {
  calificacionId: number;
  publicacionId: Publicacion;
  calificacionGeneral: number;
}

export interface Cliente {
  clienteId: number;
  // Add other fields as needed
}

export interface CalificacionDetalle {
  calificacionDetalleId: number;
  calificacionId: Calificacion;
  clienteId: Cliente;
  fecha: string;
  calificacion: number;
  comentario: string;
}

export interface Categoria {
  categoriaId: number;
  nombreCategoria: string;
  descripcion: string;
}

export interface Estado {
  estadoId: number;
  nombreEstado: string;
}