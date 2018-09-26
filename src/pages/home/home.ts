import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AgendaPage } from '../agenda/agenda';
import { CadastrarJogo } from '../jogo/cadastrar/cadastrarjogo';
import { AngularFireAuth } from 'angularfire2/auth';
import { JogadorPage } from '../jogador/jogador';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public tabHome: any;
  public profileTab: any;
  public user: string;
 
  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth,) {
    // this.tabHome = LoginPage;
    // this.profileTab = LoginPage;
  }

  autentication(){
    this.navCtrl.setRoot(LoginPage);
  }

  agenda(){
    this.navCtrl.push(AgendaPage);
  }
  cadastrarJogo(){
    this.navCtrl.push(CadastrarJogo);
  }
  cadastrarJogador(){
    this.navCtrl.push(JogadorPage);
  }
}
