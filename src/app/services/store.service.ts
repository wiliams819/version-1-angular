import { Injectable } from '@angular/core';
import { Producto } from '../../model/product';
/* esta libreria maneja el rxjs que trabaja con el patron Observable */

/* BehaviorSubject nos sirve para crear un obsevable que nos permite crear
todo este patron y que otros componentes se puedan suscribir y recibir los cambios. */
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  /* arreglo carrito que almacena los datos agregados, se guia con la interfaz Producto */
  carrito: Producto[] = [];
/* se crea myCart se crea una nueva instancia de behavior y lo que tiene es un array de productos
o lo que se quiere transmitir, y luego  como se quiere transmitir se le da un valor inicial igual [] */
  private myCart = new BehaviorSubject<Producto[]>([]);


  /* para asignar en una varible como observable en Angular se usa el signo de dolar $ */
  myCart$ = this.myCart.asObservable();

  AgregandoAlCarrito(product: Producto) {
    this.carrito.push(product);
    /* de esta manera mandamos la informacion para que el componente que lo necesite se suscriba
    oiga los cambios. Con .next emitimos lo que se desea en este caso lo que tiene el arreglo
    carrito */
    this.myCart.next(this.carrito);
  }

  ObtenerTotalCarrito(){
    return this.carrito.reduce((sum, item) => sum + item.price, 0);
  }

  constructor() { }
}
