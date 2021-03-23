import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent {
  nombre: string = 'Iroman';
  edad: number = 45;
  get nombreCapitalizado() {
    return this.nombre.toUpperCase();
  }
  obtenerNombre() {
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre(): void {
    this.nombre = 'spiderman';
  }
  cambiarEdad(): void {
    this.edad = 50;
  }
}
