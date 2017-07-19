import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MycookPage} from "../mycook/mycook";

/**
 * Generated class for the UserCenterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-user-center',
  templateUrl: 'user-center.html',
})
export class UserCenterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserCenterPage');
  }
  back(){
    this.navCtrl.push(MycookPage)
  }
}
