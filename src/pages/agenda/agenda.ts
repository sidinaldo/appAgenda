import { Component } from '@angular/core';
import { LoadingController, NavController, AlertController, Item } from 'ionic-angular';
import { ConsultarJogo } from '../jogo/consultar/consultarjogo';


@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html'
})
export class AgendaPage {
   public lista: any;
   

  constructor(
    public navCtrl: NavController,
    private loadingCtrl: LoadingController,
  ) {

    this.lista =
      [
        {
          mandante: "Flamento", visitante: "Olho D'água", data: { dia: 12, mes: 1, ano: 2018 }, local: "Ninho do Periquito", hora: "10", situacao: true, placar: { mandante: 1, visitante: 2 },
          jogadores:
            [
              { nome: "Sidinaldo", gols: 1 }, { nome: "Edinaldo", gols: 1 }
            ]
        },

        {
          mandante: "Olho D'água", visitante: "Atlético", data: { dia: 12, mes: 2, ano: 2018 }, local: "Parque", hora: "8", situacao: false, placar: { mandante: 1, visitante: 3 },
          jogadores:
            [
              { nome: "Sidinaldo", gols: 1 }, { nome: "Edinaldo", gols: 2 }
            ]
        },
        {
          mandante: "Grêmio", visitante: "Olho D'água", data: { dia: 12, mes: 3, ano: 2018 }, local: "Parque", hora: "10", situacao: true, placar: { mandante: 1, visitante: 2 },
          jogadores:
            [
              { nome: "Sidinaldo", gols: 1 }, { nome: "Cuece", gols: 1 }
            ]
        },
        {
          mandante: "Anísio", visitante: "Olho D'água", data: { dia: 12, mes: 4, ano: 2018 }, local: "Ninho do Periquito", hora: "10", situacao: true, placar: { mandante: 1, visitante: 2 },
          jogadores:
            [
              { nome: "Sidinaldo", gols: 1 }, { nome: "Edinaldo", gols: 1 }
            ]
        }

      ]
  }

  jogo(jogo: any){
    let loader = this.loadingCtrl.create({ content: "Aguarde..." });
    loader.present();

    this.navCtrl.push(ConsultarJogo, jogo);
    loader.dismiss();

  }
}