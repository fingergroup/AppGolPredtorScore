import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TabsPage} from "../index.paginas";

/**
 * Generated class for the UnirmeDesafioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-unirme-desafio',
  templateUrl: 'unirme-desafio.html',
})
export class UnirmeDesafioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UnirmeDesafioPage');
  }

  navegarPaginaHome(){
    this.navCtrl.push(TabsPage);
  }

  unirmeDesafio(){
    this.navCtrl.push(TabsPage);
  }

}
