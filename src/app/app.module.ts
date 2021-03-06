import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpModule } from '@angular/http';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AgendaPage } from '../pages/agenda/agenda';
import { ConsultarJogo } from '../pages/jogo/consultar/consultarjogo';
import { CadastrarJogo } from '../pages/jogo/cadastrar/cadastrarjogo';
import { JogadorPage } from '../pages/jogador/jogador';
import { SobrePage } from '../pages/sobre/sobre';
import { TabsPage } from '../components/tabs/tabs';
import { HistoricoPage } from '../pages/historico/historico';
import { TemporadaPage } from '../pages/temporada/temporada';


export const environment = {
  firebase: {
    ...
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
    HistoricoPage,
    TemporadaPage,
    TabsPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule
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
    HistoricoPage,
    TemporadaPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
