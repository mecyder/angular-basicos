import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  listado: string[] = ['Iroman', 'Superman', 'WonderWoman'];
  heroeBorrado: string[] = [];
  constructor() {}

  ngOnInit(): void {}

  borrarHeroe(): void {
    this.heroeBorrado.push(this.listado.shift() || '');
  }
}
