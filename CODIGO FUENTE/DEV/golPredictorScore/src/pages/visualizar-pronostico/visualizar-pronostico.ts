import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TabsPage, VisualizarPronosticoPartidoPage} from "../index.paginas";

/**
 * Generated class for the VisualizarPronosticoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-visualizar-pronostico',
  templateUrl: 'visualizar-pronostico.html',
})
export class VisualizarPronosticoPage {

  fase: string = "fase_1";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VisualizarPronosticoPage');
  }

  navegarPaginaVisualizarPronosticoPartido(){
    this.navCtrl.push(VisualizarPronosticoPartidoPage);
  }

}
