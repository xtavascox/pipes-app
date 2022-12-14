import {NgModule} from '@angular/core';

import {ButtonModule} from 'primeng/button';
import {CardModule} from "primeng/card";
import {MenubarModule} from "primeng/menubar";
import {FieldsetModule} from 'primeng/fieldset';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';

@NgModule({
  exports: [
    CardModule,
    ButtonModule,
    MenubarModule,
    FieldsetModule,
    ToolbarModule,
    TableModule
  ]
})
export class PrimeNgModule {
}
