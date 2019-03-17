import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RegistrarPronosticoPage, LoginPage, RankigDesafioPage, ModificarDesafioPage} from "../index.paginas";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navegarPaginaRegistrarPronostico(){
    this.navCtrl.push(RegistrarPronosticoPage);
  }

  navegarPaginaRanking(){
    this.navCtrl.push(RankigDesafioPage);
  }

  navegarPaginaModificarDesafio(){
    this.navCtrl.push(ModificarDesafioPage);
  }

  

}
