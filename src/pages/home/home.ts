import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AgendaPage } from '../agenda/agenda';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public photosTab: any;
  public profileTab: any;
  public user: string;
 
  constructor(public navCtrl: NavController) {
    this.photosTab = LoginPage;
    this.profileTab = LoginPage;
  }

  autentication(){
    this.navCtrl.setRoot(LoginPage);
  }

  agenda(){
    this.navCtrl.push(AgendaPage);
  }
}
