import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TabsPage} from "../index.paginas";

/**
 * Generated class for the PronosticoUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pronostico-usuario',
  templateUrl: 'pronostico-usuario.html',
})
export class PronosticoUsuarioPage {

  fase: string = "fase_1";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PronosticoUsuarioPage');
  }

  navegarPaginaHome(){
    this.navCtrl.push(TabsPage);
  }

}
