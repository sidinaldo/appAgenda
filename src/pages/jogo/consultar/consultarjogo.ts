import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams } from 'ionic-angular';


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
      
    } 
}