import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {VisualizarPronosticoPage} from "../index.paginas";

/**
 * Generated class for the VisualizarPronosticoPartidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-visualizar-pronostico-partido',
  templateUrl: 'visualizar-pronostico-partido.html',
})
export class VisualizarPronosticoPartidoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VisualizarPronosticoPartidoPage');
  }

  verPronosticosUsuario(){
    this.navCtrl.push(VisualizarPronosticoPage);

  }

}
