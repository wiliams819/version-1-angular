import { Injectable } from '@angular/core';
import { Producto } from '../../model/product';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  /* arreglo carrito que almacena los datos agregados, se guia con la interfaz Producto */
  carrito: Producto[] = [];

  AgregandoAlCarrito(product: Producto) {
    this.carrito.push(product);
  }

  ObtenerTotalCarrito(){
    return this.carrito.reduce((sum, item) => sum + item.price, 0);
  }

  constructor() { }
}
