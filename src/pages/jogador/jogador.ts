import { Component } from '@angular/core';
import { LoadingController, NavController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireDatabase, AngularFireObject, AngularFireList, FirebaseObjectObservable  } from "angularfire2/database";
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';



@Component({
  selector: 'page-jogador',
  templateUrl: 'jogador.html'
})
export class JogadorPage {
  public form: FormGroup;
  public jogadores: FirebaseObjectObservable<any>;
  public lista: any;

  constructor(
    private fb: FormBuilder,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private alertCtrl: AlertController) {
    this.form = this.fb.group({
      nome: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required
      ])],
      posicao: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])]
    });
    

    
    console.log(this.jogadores)
    this.consultar();
    // afAuth.authState.subscribe(user => {
    //   if (user) {
    //     this.user = user.email
    //   }
    // });
  }

  submit() {
    let loader = this.loadingCtrl.create({ content: "Cadastranto..." });
    loader.present();
    this.afAuth.authState.subscribe(user => {
      if (!user) {
        loader.dismiss();
        let alert = this.alertCtrl.create({
          title: 'Ops, algo deu errado',
          subTitle: 'Você não tem permissão.',
          buttons: ['OK']
        });
        alert.present();
        this.navCtrl.setRoot(HomePage);
      } else {
        this.jogadores = this.db.list('jogadores');
       this.jogadores.push(this.form.value).then(() => {
          loader.dismiss();
          this.form.reset();
        }).catch(() => {
          loader.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Ops, algo deu errado',
            subTitle: 'Não foi possível cadastrar.',
            buttons: ['OK']
          });
          alert.present();
        });
        this.jogadores.snapshotChanges();
        this.jogadores.subscribe();       
          
      }
    });
  }

  consultar() {
    let loader = this.loadingCtrl.create({ content: "Carregando jogadores..." });
    loader.present();
    this.db.list('jogadores').valueChanges().subscribe(lista => {
      this.lista = lista.reverse();
      loader.dismiss();
    });
  }
}