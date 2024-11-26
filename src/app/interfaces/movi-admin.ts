export interface MovieAdmin {
    titulo: string;
    descripcion: string;
    genero: string;
    anioLanzamiento: number;
    director: string;
    actores: string[];
    duracion: number;
    precioAlquiler: number;
    precioCompra: number;
    imagen: string;
    calificacion?: number;
}
