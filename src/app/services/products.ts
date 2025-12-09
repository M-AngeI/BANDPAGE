import { Injectable } from '@angular/core';

export interface Product{
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

@Injectable({
  providedIn: 'root',
})

export class products {

  private products: Product[] = [
   {
    id: 1,
    nombre: 'scaled and icy',
    descripcion: '4to almbum de twenty one pilots',
    precio: 80000,
    imagen: '/imagenes/ScaledAndIcy.jpg'
   },
   {
    id: 2,
    nombre: 'blurryface',
    descripcion:'el album mas famoso de la banda',
    precio: 120000,
    imagen: '/imagenes/blurryface.jpg'
   },
   {
    id: 3,
    nombre: 'breach',
    descripcion: 'el disco mas nuevo de la banda',
    precio: 100000,
    imagen: '/imagenes/breach.jpg'
   },
   {
    id: 4,
    nombre: 'clancy',
    descripcion: 'de los albumes mejor puntuados',
    precio: 90000,
    imagen: '/imagenes/clancy.jpg'
   }
  ]
  constructor() { }
  getProducts():Product[]{
    return this.products;
};

}
