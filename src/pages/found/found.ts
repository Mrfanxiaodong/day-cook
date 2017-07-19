import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FoundCenterPage} from "../found-center/found-center";


@Component({
  selector: 'page-found',
  templateUrl: 'found.html',
})
export class FoundPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoundPage');
  }
  back(){
    this.navCtrl.pop();
  }

  founder(){
    this.navCtrl.push(FoundCenterPage)
  }

}
