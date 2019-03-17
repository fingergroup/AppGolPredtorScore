import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {HomePage, LoginPage} from "../index.paginas";

/**
 * Generated class for the RegistroUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro-usuario',
  templateUrl: 'registro-usuario.html',
})
export class RegistroUsuarioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroUsuarioPage');
  }

  registrarUsuario(){
    this.navegarPaginaHome();
  }
  navegarPaginaHome(){
    this.navCtrl.push(HomePage);
  }

  navegarPaginaLogin(){
      this.navCtrl.setRoot(LoginPage);
  }

}
