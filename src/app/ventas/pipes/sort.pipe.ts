import {Pipe, PipeTransform} from '@angular/core';
import {Heroe} from "../interfaces/ventas.interface";

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(heroes: any[], key: keyof Heroe, reverse: boolean): Heroe[] {
    if (!key) return heroes;
    console.log(reverse)
    if (!reverse) {
      return heroes.sort((a: Heroe, b: Heroe) => {
        return (a[key] > b[key]) ? -1 : 1;
      });
    }

    return heroes.sort((a: Heroe, b: Heroe) => {
      return (a[key] > b[key]) ? 1 : -1;
    });


    // switch (key) {
    //   case 'nombre':
    //     return heroes.sort((a: Heroe, b: Heroe) => (a[`${key}`] > b[`${key}`]) ? 1 : -1);
    //   case 'vuela':
    //     return heroes.sort((a: Heroe, b: Heroe) => (a.vuela > b.vuela) ? -1 : 1);
    //   case 'color':
    //     return heroes.sort((a: Heroe, b: Heroe) => (a.color > b.color) ? 1 : -1);
    //   default:
    //     return heroes;
    // }

  }

}
