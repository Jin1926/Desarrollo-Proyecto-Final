export interface MovieAdmin {
    _id: string;
    titulo: string;
    anioLanza: number;
    director: string;
    actores: string[];
    genero: string;
    duracion: number;
    precioAlquiler: number;
    precioCompra: number;
    imagen: string;
    calificacion?: number;
}
