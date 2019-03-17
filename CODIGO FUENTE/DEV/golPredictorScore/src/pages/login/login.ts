import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage, RegistroUsuarioPage, RecordarContraseniaPage, TabsPage} from "../index.paginas";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    
  }

  signInGoogle() {
    console.log('Login Google');
    this.navegarPaginaHome();

  }

  signInWithFacebook() {
    console.log('Login Facebook');
    this.navegarPaginaHome();
  }
  
  loginUsuario() {
    this.navegarPaginaHome();
    console.log('Login Facebook');
  }

  navegarPaginaHome(){    
    this.navCtrl.setRoot(TabsPage);
  }
  
  registrarUsuario(){
    this.navCtrl.push(RegistroUsuarioPage);
  }

  recordarContrasenia(){
    this.navCtrl.push(RecordarContraseniaPage);
  }

}
