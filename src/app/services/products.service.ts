import { Injectable } from '@angular/core';
//importacion de modulo http para solicitudes http de angular
import { HttpClient } from '@angular/common/http';

import {Producto} from '../../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
//definimos una inyeccion de depentencias para el servicio de http
  constructor( private https:HttpClient) { }
//metodo para obtener un arreglo de productos desde la api
//tipamos la obtencion de datos para que devuelva un objeto
//de tipo interface Producto
  ObtenerTodosLosProductos(){
    return this.https.get<Producto[]>("https://fakestoreapi.com/products");

  }
}
