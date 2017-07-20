import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomeTwoCai2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-home-two-cai2',
  templateUrl: 'home-two-cai2.html',
})
export class HomeTwoCai2Page {
  caidetail;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.caidetail = this.navParams.get('cai');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeTwoCai2Page');
  }

}
