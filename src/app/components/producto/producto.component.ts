import { Component, OnInit, Input } from '@angular/core';
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
  constructor() { }

  ngOnInit(): void {
  }

}
