import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-sobre',
  templateUrl: 'sobre.html'
})
export class SobrePage {
  public color: string = "blue";
  public homeTab: any;
 
  constructor(public navCtrl: NavController) { 
   this.homeTab = HomePage;
  }  
}
