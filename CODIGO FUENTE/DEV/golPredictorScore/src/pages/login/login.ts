import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage, RegistroUsuarioPage, RecordarContraseniaPage, TabsPage} from "../index.paginas";

import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { UsuarioProvider } from '../../providers/usuario/usuario';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,private afAuth: AngularFireAuth, public usuarioProv: UsuarioProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    
  }

  signInGoogle() {
    console.log('Login Google');
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => {
        console.log(res);
      });
    //this.navegarPaginaHome();

  }

  signInWithFacebook() {
   /** console.log('Login Facebook');
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => {
        console.log(res);
      });
      */

      console.log('Login Facebook');
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res =>{ 
        console.log(res);
        let user = res.user;
        this.usuarioProv.cargarUsuario(
          user.displayName,
          user.email,
          user.photoURL,
          user.uid,
          'facebook'
        );
        this.navegarPaginaHome();
      });
    //this.navegarPaginaHome();
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
