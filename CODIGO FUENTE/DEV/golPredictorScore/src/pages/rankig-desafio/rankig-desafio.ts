import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RegistrarPronosticoPage, LoginPage, VisualizarPronosticoPage} from "../index.paginas";

/**
 * Generated class for the RankigDesafioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rankig-desafio',
  templateUrl: 'rankig-desafio.html',
})
export class RankigDesafioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RankigDesafioPage');
  }

  verPronosticosUsuario(){    
    this.navCtrl.push(VisualizarPronosticoPage);
  }

}
