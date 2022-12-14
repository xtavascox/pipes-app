import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NumerosComponent} from './pages/numeros/numeros.component';
import {NoComunesComponent} from './pages/no-comunes/no-comunes.component';
import {BasicosComponent} from './pages/basicos/basicos.component';
import {OrdenarComponent} from './pages/ordenar/ordenar.component';
import {PrimeNgModule} from "../prime-ng/prime-ng.module";
import {MayusculasPipe} from "./pipes/mayusculas.pipe";
import { VuelaPipe } from './pipes/vuela.pipe';
import { SortPipe } from './pipes/sort.pipe';


@NgModule({
  declarations: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent,
    MayusculasPipe,
    VuelaPipe,
    SortPipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent
  ]
})
export class VentasModule {
}
