import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GouwuchePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-gouwuche',
  templateUrl: 'gouwuche.html',
})
export class GouwuchePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GouwuchePage');
  }
  // back(){
  //   this.navCtrl.pop()
  // }

}
