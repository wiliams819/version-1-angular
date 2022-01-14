import { Component, OnInit } from '@angular/core';
//se trae el servicio de productos
import { Producto } from '../../../model/product';
import { StoreService } from '../../services/store.service';
//se trae el servicio de productos
import { ProductsService } from '../../services/products.service';
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
  products: Producto[] = []
  //inyeccion de depentencias para el servicio de productos y el store
  constructor(private store: StoreService, private productService: ProductsService) {
    this.carrito = this.store.carrito;
  }

  ngOnInit(): void {
    //se obtiene el arreglo de productos y se agrega a la variable products
    this.productService.ObtenerTodosLosProductos().subscribe(data => {
      console.log(data);
      this.products = data;
    })
  }
  /* agregamos al carrito lo obtenido por el componente producto. */
  AgregandoAlCarrito(product: Producto) {
    this.store.AgregandoAlCarrito(product);
    /* a total usamos el metodo reduce con carrito */
    this.total = this.store.ObtenerTotalCarrito();
  }
}
