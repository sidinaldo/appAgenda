import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-consultarjogo',
  templateUrl: 'consultarjogo.html'
})
export class ConsultarJogo {
  public firstParam;
  constructor(
    private loadingCtrl: LoadingController,
    public navParams: NavParams
    ) { 
      console.log(navParams);
      this.firstParam = navParams.data;
    } 
}