import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage, LoginPage, RecordarContraseniaPage, RegistroUsuarioPage, CrearDeafioPage, InvitarUsuariosPage, PronosticoUsuarioPage, RankigDesafioPage, RegistrarPronosticoPage, UnirmeDesafioPage, TabsPage, ModificarDesafioPage, VisualizarPronosticoPage, VisualizarPronosticoPartidoPage } from '../pages/index.paginas';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,RecordarContraseniaPage, RegistroUsuarioPage, CrearDeafioPage, InvitarUsuariosPage, PronosticoUsuarioPage, RankigDesafioPage, RegistrarPronosticoPage, UnirmeDesafioPage,TabsPage,ModificarDesafioPage, VisualizarPronosticoPage, VisualizarPronosticoPartidoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,RecordarContraseniaPage, RegistroUsuarioPage, CrearDeafioPage, InvitarUsuariosPage, PronosticoUsuarioPage, RankigDesafioPage, RegistrarPronosticoPage, UnirmeDesafioPage,TabsPage,ModificarDesafioPage, VisualizarPronosticoPage, VisualizarPronosticoPartidoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
