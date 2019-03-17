import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PronosticoUsuarioPage } from './pronostico-usuario';

@NgModule({
  declarations: [
    PronosticoUsuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(PronosticoUsuarioPage),
  ],
})
export class PronosticoUsuarioPageModule {}
