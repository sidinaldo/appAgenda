import { Component } from '@angular/core';
import { LoadingController, NavController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'page-cadastrarjogo',
  templateUrl: 'cadastrarjogo.html'
})
export class CadastrarJogo {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    //private afAuth: AngularFireAuth,
    private loadingCtrl: LoadingController,
    ) {
    this.form = this.fb.group({
      mandante: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required
      ])],
      visitante: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required
      ])],
      local: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required
      ])],
      hora: ['', Validators.compose([
        Validators.minLength(2),
      ])],
      situacao: ['', Validators.compose([
      ])],
      placar: ['', Validators.compose([
        Validators.required
      ])],
      jogadores: ['', Validators.compose([
      ])]
    });
  }

  submit() {
    let loader = this.loadingCtrl.create({ content: "Autenticando..." });
    loader.present();
  }

  goToSignup() {
    //this.navCtrl.setRoot(SignupPage);
  }
}