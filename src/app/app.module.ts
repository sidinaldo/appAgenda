import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AgendaPage } from '../pages/agenda/agenda';
import { ConsultarJogo } from '../pages/jogo/consultar/consultarjogo';
import { CadastrarJogo } from '../pages/jogo/cadastrar/cadastrarjogo';
import { JogadorPage } from '../pages/jogador/jogador';
import { SobrePage } from '../pages/sobre/sobre';
import { TabsPage } from '../components/tabs/tabs';



export const environment = {
  firebase: {
    apiKey: "AIzaSyDdVX35nWwQzzYnD_9gYG4EHpTcqsvKJV4",
    authDomain: "agenda-d0ed6.firebaseapp.com",
    databaseURL: "https://agenda-d0ed6.firebaseio.com",
    projectId: "agenda-d0ed6",
    storageBucket: "agenda-d0ed6.appspot.com",
    messagingSenderId: "382350095304"
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AgendaPage,
    ConsultarJogo,
    CadastrarJogo,
    JogadorPage,
    SobrePage,
    TabsPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    AgendaPage,
    ConsultarJogo,
    CadastrarJogo,
    JogadorPage,
    SobrePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
