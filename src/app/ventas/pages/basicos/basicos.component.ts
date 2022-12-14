import {Component} from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
})
export class BasicosComponent {

  nombreLower: string = 'gustavo';
  nombreUpper: string = 'GUSTAVO';
  nombreCompleto: string = 'GustAvO fAjARDo';

  fecha: Date = new Date()
}
