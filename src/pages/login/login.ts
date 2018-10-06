import { Component } from '@angular/core';
import { LoadingController, NavController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HomePage } from '../home/home';
import { AngularFireAuth } from 'angularfire2/auth';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private splashScreen: SplashScreen
    ) {
    this.form = this.fb.group({
      email: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])]
    });
    let loader = this.loadingCtrl.create({ content: "Carregando..." });
    loader.present();

    setTimeout(() => {
      loader.dismiss();
    }, 4000);

    
    // afAuth.authState.subscribe(user => {
    //   if (user) {
    //     this.navCtrl.setRoot(HomePage);
    //   }
    // });
  }

  submit() {
    let loader = this.loadingCtrl.create({ content: "Autenticando..." });
    loader.present();

    this.afAuth.auth
      //.signInWithEmailAndPassword(this.form.controls['email'].value, this.form.controls['password'].value)
      .signInWithEmailAndPassword('sidinaldobarbosa@gmail.com', 'forense@231619')
      .then(() => {
        loader.dismiss();
         this.navCtrl.setRoot(HomePage);
      })
      .catch(() => {
        loader.dismiss();
        let alert = this.alertCtrl.create({
          title: 'Autenticação Inválida',
          subTitle: 'Usuário ou senha incorretos.',
          buttons: ['OK']
        });
        alert.present();
      });
  }
}