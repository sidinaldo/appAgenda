import { Component } from '@angular/core';
import { HomePage } from '../../pages/home/home';
import { LoginPage } from '../../pages/login/login';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = LoginPage;
  tab3Root = LoginPage;

  constructor() {

  }
}
