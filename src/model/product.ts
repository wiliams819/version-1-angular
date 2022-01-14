export interface Producto {
  id: number;
  /* cambio de name a title en la interfaz */
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}
