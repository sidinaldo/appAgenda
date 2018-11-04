import { Component } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';
import { environment } from '../../environments/environment';
import { TemporadaPage } from '../temporada/temporada';
import { ConsultarJogo } from '../jogo/consultar/consultarjogo';

@Component({
  selector: 'page-historico',
  templateUrl: 'historico.html'
})
export class HistoricoPage {
  public jogos: Array<any>;
  public listFilter: any;
  public anos: Array<any> = [];
  constructor(
    public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private http: Http
  ) {


    var d = new Date();
    var anoAtual = d.getFullYear()
    for (let ano = 2009; ano <= anoAtual; ano++) {
      //let obj = { ano: ano, jogos: [] }
      this.anos.push(ano);
    }
    let loader = this.loadingCtrl.create({ content: "Carregando jogos..." });
    loader.present();
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.get(environment.serviceUrl + 'jogos', options).subscribe(data => {
      this.jogos = data.json();
      loader.dismiss();
    }, error => {
      console.log(error);
      loader.dismiss();
    });
  }

  onSelectChange(selectedValue: any) {
    this.listFilter = this.jogos.filter(jogo => {
      var formtDate = jogo.dataJogo.replace("-", "/");
      let anoJogo = new Date(formtDate).getFullYear();
      return anoJogo == selectedValue;
    })
  }

  getColor(jogo) {
    if (jogo.golsMandante > jogo.golsVisitante)
      return "#2ec95c";

    if (jogo.golsMandante < jogo.golsVisitante)
      return "#b54646";

    if (jogo.golsMandante == jogo.golsVisitante)
      return "#e6820b";
  }
  getJogo(jogo: any) {
    this.navCtrl.push(ConsultarJogo, { jogo: jogo });
  }
}