import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Producto } from '../../../model/product';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
/* se recibe el parametro enviado por products, y se hace un esquema de como va a llegar
con Producto se hace el llamado a Input */
  @Input() Product: Producto = {
    id: 0,
    name: "",
    price: 0,
    description: "",
    image: "",
  };
  /* se emite el evento agregarProducto creando una instancia de EventEmitter de tipo Producto */
  @Output() agregarProducto = new EventEmitter<Producto>();
  constructor() { }

  ngOnInit(): void {
  }
/* metodo local que se emite que ejecuta lo emitido(emite el arreglo con la interfaz de guia)
este metodo esta en button de etiqueta*/
  addProduct(){
    this.agregarProducto.emit(this.Product);
  }

}
