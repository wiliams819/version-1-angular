import { Component, OnInit } from '@angular/core';
//se trae el servicio de productos
import { Producto } from '../../../model/product';
import { StoreService } from '../../services/store.service';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  //variable que obtiene datos de Estaod Carrito
  carrito: Producto[] = [];
  /* tiene el total de cada producto */
  total: number = 0;

  //se crea un arreglo con productos guiandose con la interfaz Producto
  products: Producto[] = [
    {
      id: 1,
      name: 'Producto 1',
      price: 100,
      description: "productos uno para vender",
      image: 'https://picsum.photos/200/300'
    },
    {
      id: 2,
      name: 'Producto 2',
      price: 200,
      description: "productos dos para vender",
      image: 'https://picsum.photos/200/300'
    },
    {
      id: 3,
      name: 'Producto 3',
      price: 300,
      description: "productos tres para vender",
      image: 'https://picsum.photos/200/300'
    },
    {
      id: 4,
      name: 'Producto 4',
      price: 400,
      description: "productos cuatro para vender",
      image: 'https://picsum.photos/200/300'
    },
  ]
  constructor(private store: StoreService) {
    this.carrito = this.store.carrito;
   }

  ngOnInit(): void {
  }
/* agregamos al carrito lo obtenido por el componente producto. */
  AgregandoAlCarrito(product: Producto) {
    this.store.AgregandoAlCarrito(product);
    /* a total usamos el metodo reduce con carrito */
    this.total = this.store.ObtenerTotalCarrito();
  }
}
