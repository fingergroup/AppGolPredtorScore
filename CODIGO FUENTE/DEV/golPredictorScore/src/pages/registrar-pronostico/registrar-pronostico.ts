import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TabsPage, VisualizarPronosticoPartidoPage} from "../index.paginas";
import { RankigDesafioPage } from '../rankig-desafio/rankig-desafio';

/**
 * Generated class for the RegistrarPronosticoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrar-pronostico',
  templateUrl: 'registrar-pronostico.html',
})
export class RegistrarPronosticoPage {

  fase: string = "fase_1";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarPronosticoPage');
  }

  navegarPaginaHome(){
    this.navCtrl.push(TabsPage);
  }

  navegarPaginaRanking(){
    this.navCtrl.push(RankigDesafioPage);
  }
  navegarPaginaVisualizarPronosticoPartido(){
    this.navCtrl.push(VisualizarPronosticoPartidoPage);
  }

}
