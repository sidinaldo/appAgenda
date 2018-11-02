import { Component } from '@angular/core';
import { LoadingController, NavController, AlertController, Thumbnail } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Http, RequestOptions, Headers } from '@angular/http';
import { environment } from '../../environments/environment';

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
    private db: AngularFireDatabase,
    private alertCtrl: AlertController,
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
    let jogo = lista.filter(item => {
      let ano = new Date(item.dataJogo).getFullYear();
      return this.anos.map(element => {
        return ano == element.ano;
      });
    });
    this.anos.push()
    console.log(this.anos);
    console.log(jogo);


  }
}