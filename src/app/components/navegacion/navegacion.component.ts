import { Component, OnInit } from '@angular/core';
/* traermos el servicio que tiene el patron observable, ya que queremos que el componente
navegacion este suscrito a ese estado */
import { StoreService } from '../../services/store.service';
@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.scss']
})
export class NavegacionComponent implements OnInit {

  activeMenu = false;
  /* almacenamos el estado de manera local para mostrarse */
  contador = 0;
  /* inyectamos el servicio */
  constructor(private store: StoreService) { }

  ngOnInit(): void {
/* con el servicio inyectado lo usamos, de esta manera haciendo referencia a store llamado de esa
manera en la inyeccion, luego se suscribe, este regresa una promesa, en donde asigamos
el valor de productos a la variable contador, esto usando length para saber cuantos son  */
    this.store.myCart$.subscribe(
      productos => {
        this.contador = productos.length;
      });
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

}
