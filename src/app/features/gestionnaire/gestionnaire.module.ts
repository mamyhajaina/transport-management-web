import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionnaireRoutingModule } from './gestionnaire-routing.module';
import { GestionnaireComponent } from './gestionnaire.component';


@NgModule({
  declarations: [
    GestionnaireComponent
  ],
  imports: [
    CommonModule,
    GestionnaireRoutingModule
  ]
})
export class GestionnaireModule { }
