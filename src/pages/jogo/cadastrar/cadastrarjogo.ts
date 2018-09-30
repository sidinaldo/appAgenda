import { Component } from '@angular/core';
import { LoadingController, NavController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../../home/home';

@Component({
  selector: 'page-cadastrarjogo',
  templateUrl: 'cadastrarjogo.html'
})
export class CadastrarJogo {
  public form: FormGroup;
  public jogos: AngularFireList<any>;
  public user: string = '';
  public jogador = {
    nome: null,
    gol: null
  }
  constructor(
    private fb: FormBuilder,
    private loadingCtrl: LoadingController,
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
  ) {
    this.jogos = this.db.list('jogos');
    afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user.email
      }
    });

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
      data: ['', Validators.compose([
        Validators.minLength(2),
      ])],
      situacao: [false, Validators.compose([
      ])],
      placarmandante: ['', Validators.compose([
        Validators.required
      ])],
      placarvisitante: ['', Validators.compose([
        Validators.required
      ])],
      observacao: ['', Validators.compose([
      ])],
      jogadores: new FormArray([])
    });
  }

  submit() {
    let loader = this.loadingCtrl.create({ content: "Cadastrando..." });
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
        this.jogos.push(this.form.value).then(() => {
          this.jogos.snapshotChanges().subscribe();
          loader.dismiss();
          this.form.reset();
        }).cath(() => {
          
        });
      }
    });
  }

  focus() {
    this.form.controls['mandante'].patchValue("Olho D'água");
    this.form.controls['visitante'].patchValue("Olho D'água");
  }


  AddJogador() {
    (<FormArray>this.form.controls['jogadores']).push(
      new FormGroup({
        nome: new FormControl('', Validators.required),
        gol: new FormControl('', Validators.required)
      })
    )
  }
}