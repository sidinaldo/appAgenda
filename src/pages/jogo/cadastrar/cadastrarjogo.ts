import { Component } from '@angular/core';
import { LoadingController, NavController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';


@Component({
  selector: 'page-cadastrarjogo',
  templateUrl: 'cadastrarjogo.html'
})
export class CadastrarJogo {
  public form: FormGroup;
  public listJogadores: FormArray;
  public jogador = {
    nome: null,
    gol: null
  }
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
    let loader = this.loadingCtrl.create({ content: "Autenticando..." });
    loader.present();
  }

  AddJogador() {
    (<FormArray>this.form.controls['jogadores']).push(
      new FormGroup({
        nome: new FormControl('', Validators.required),
        gol: new FormControl('', Validators.required)
      })
    )

    console.log(this.form)
  }
}