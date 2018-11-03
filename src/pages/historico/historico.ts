import { Component } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';
import { environment } from '../../environments/environment';
import { TemporadaPage } from '../temporada/temporada';

@Component({
  selector: 'page-historico',
  templateUrl: 'historico.html'
})
export class HistoricoPage {
  public jogos: any;
  public anos: Array<any> = [];
  public lista: any;
  constructor(
    public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private http: Http
  ) {
    var d = new Date();
    var anoAtual = d.getFullYear()
    for (let ano = 2009; ano <= anoAtual; ano++) {
      let obj = { ano: ano, jogos: [] }
      this.anos.push(obj);
    }
    let loader = this.loadingCtrl.create({ content: "Carregando jogos..." });
    loader.present();
    this.getJogos(loader);

  }

  getJogos(loader) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.get(environment.serviceUrl + 'jogos', options).subscribe(data => {
      this.formataAno(data.json());
      this.jogos = data.json();
      loader.dismiss();
    }, error => {
      console.log(error);
      loader.dismiss();
    });
  }

  formataAno(lista: Array<any>) {
    lista.forEach(jogo => {
      this.anos.filter(item => {
        var formtDate = jogo.dataJogo.replace("-", "/");
        let anoJogo = new Date(formtDate).getFullYear();
        if (item.ano == anoJogo)
          item.jogos.push(jogo);
      });
    });
  }

  temporada(item: any){
    this.navCtrl.push(TemporadaPage, {ano: item});
  }
}