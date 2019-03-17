import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TabsPage} from "../index.paginas";

/**
 * Generated class for the CrearDeafioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crear-deafio',
  templateUrl: 'crear-deafio.html',
})
export class CrearDeafioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearDeafioPage');
  }

  
  navegarPaginaHome(){
    this.navCtrl.push(TabsPage);
  }

  registrarDesafio(){
    this.navCtrl.push(TabsPage);
  }

}
