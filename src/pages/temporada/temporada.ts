import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams, ModalController } from 'ionic-angular';
import { ConsultarJogo } from '../jogo/consultar/consultarjogo';


@Component({
  selector: 'page-temporada',
  templateUrl: 'temporada.html'
})
export class TemporadaPage {
  public lista: any;
  public resultado: string;
  constructor(
    public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) {
    let loader = this.loadingCtrl.create({ content: "Carregando jogos..." });
    loader.present();
    this.lista = navParams.get("ano");
    loader.dismiss();

    console.log(this.lista)
    console.log(this.resultado)
  }

  getColor(jogo) {
    if (jogo.golsMandante > jogo.golsVisitante)
      return "#2ec95c";

    if (jogo.golsMandante < jogo.golsVisitante)
      return "#b54646";

    if (jogo.golsMandante == jogo.golsVisitante)
      return "#e6820b";

  }
}