import {Component} from '@angular/core';
import {Color, Heroe} from "../../interfaces/ventas.interface";

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
})
export class OrdenarComponent {
  isUpper: boolean = true;

  handleUpper() {
    this.isUpper = !this.isUpper;
  }


  sortBy!: keyof Heroe;
  reverse: boolean = false;
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna verde',
      vuela: true,
      color: Color.verde
    },
  ];

  handleSortBy(value: keyof Heroe) {
    this.sortBy = value;
    this.reverse = !this.reverse;
  }

}
