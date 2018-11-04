import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-consultarjogo',
  templateUrl: 'consultarjogo.html'
})
export class ConsultarJogo {
  public jogo;
  constructor(
    private loadingCtrl: LoadingController,
    public navParams: NavParams
  ) {

    let loader = this.loadingCtrl.create({ content: "Carregando jogos..." });
    loader.present();
    this.jogo = navParams.get("jogo");
    loader.dismiss();
    console.log(this.jogo)
  }
}