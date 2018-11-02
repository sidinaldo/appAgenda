import { Component } from '@angular/core';
import { LoadingController, NavController, AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Http, RequestOptions, Headers } from '@angular/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html'
})
export class AgendaPage {
  public jogos: any;
  constructor(
    public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private db: AngularFireDatabase,
    private alertCtrl: AlertController,
    private http: Http
  ) {
    let loader = this.loadingCtrl.create({ content: "Carregando jogos..." });
     loader.present();
    this.getJogos(loader);
    
  }

  getJogos(loader) {
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
}