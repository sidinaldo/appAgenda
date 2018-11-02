import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'page-temporada',
  templateUrl: 'temporada.html'
})
export class TemporadaPage {
  public jogos: any;
  public anos: Array<any> = [];
  public lista: any;
  constructor(
    public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private http: Http,
    public navParams: NavParams
  ) { 
    let loader = this.loadingCtrl.create({ content: "Carregando jogos..." });
    loader.present();
    let ano = navParams.get("ano");

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.get(environment.serviceUrl + 'jogos/ano/' + ano, options).subscribe(data => {
      this.jogos = data.json();
      loader.dismiss();
    }, error => {
      loader.dismiss();
    });
  }
}