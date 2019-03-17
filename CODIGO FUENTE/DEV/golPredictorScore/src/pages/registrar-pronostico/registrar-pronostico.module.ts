import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistrarPronosticoPage } from './registrar-pronostico';

@NgModule({
  declarations: [
    RegistrarPronosticoPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistrarPronosticoPage),
  ],
})
export class RegistrarPronosticoPageModule {}
