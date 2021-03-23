import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador/contador.component.html',
})
export class ContadorComponent {
  title = 'bases';
  numero = 10;
  base = 5;

  acumular(valor: number): void {
    this.numero += valor;
  }
}
