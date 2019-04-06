import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage, LoginPage, RecordarContraseniaPage, RegistroUsuarioPage, CrearDeafioPage, InvitarUsuariosPage, PronosticoUsuarioPage, RankigDesafioPage, RegistrarPronosticoPage, UnirmeDesafioPage, TabsPage, ModificarDesafioPage, VisualizarPronosticoPage, VisualizarPronosticoPartidoPage } from '../pages/index.paginas';

// FIRE BASE
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { UsuarioProvider } from '../providers/usuario/usuario';

export const firebaseConfig = {
  apiKey: "AIzaSyDJSlHX-M529gy2EIxM0931omctKHmWXHo",
    authDomain: "golpredictorscore.firebaseapp.com",
    databaseURL: "https://golpredictorscore.firebaseio.com",
    projectId: "golpredictorscore",
    storageBucket: "golpredictorscore.appspot.com",
    messagingSenderId: "268389789659"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,RecordarContraseniaPage, RegistroUsuarioPage, CrearDeafioPage, InvitarUsuariosPage, PronosticoUsuarioPage, RankigDesafioPage, RegistrarPronosticoPage, UnirmeDesafioPage,TabsPage,ModificarDesafioPage, VisualizarPronosticoPage, VisualizarPronosticoPartidoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioProvider
  ]
})
export class AppModule {}
