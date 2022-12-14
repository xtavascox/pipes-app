import {Component} from '@angular/core';
import {interval} from "rxjs";

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
})
export class NoComunesComponent {
  nombre: string = 'gustavo fajardo';
  genero: string = 'masculino';

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  cambiarCliente() {
    switch (this.genero) {
      case 'masculino':
        this.nombre = 'Camila Cortes';
        this.genero = 'femenino'
        break;
      case 'femenino':
        this.nombre = 'gustavo fajardo';
        this.genero = 'masculino'
        break;
    }
  }


  clientes: string[] = ['maria', 'pedro', 'jose', 'gustavo', 'daniel'];
  clientesmapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': `tenemos # clientes esperando.`
  }

  borrarCliente() {
    this.clientes.pop();
  }

  persona = {
    nombre: 'gustavo',
    edad: 25,
    direccion: 'Bogota, Colombia'
  }

  heroes = [{nombre: 'thor', poder: 'rayo'}, {nombre: 'spider-man', poder: 'poderes aracnidos'}, {
    nombre: 'iron-man',
    poder: 'dinero'
  }];


  miObservable = interval(1000);

  valorPromesa=new Promise((resolve, reject)=> {
    setTimeout(()=>{
      resolve('Tenemos data de promesa')
    },3000)
  })
}
