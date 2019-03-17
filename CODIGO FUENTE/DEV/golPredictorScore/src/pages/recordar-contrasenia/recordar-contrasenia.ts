import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {LoginPage} from "../index.paginas";

/**
 * Generated class for the RecordarContraseniaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recordar-contrasenia',
  templateUrl: 'recordar-contrasenia.html',
})
export class RecordarContraseniaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecordarContraseniaPage');
  }

  navegarPaginaLogin(){
    this.navCtrl.setRoot(LoginPage);
}

}
