import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomeTwoCaiPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-home-two-cai',
  templateUrl: 'home-two-cai.html',
})
export class HomeTwoCaiPage {
  caidetail;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.caidetail = this.navParams.get('cai');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeTwoCaiPage');
  }
}
