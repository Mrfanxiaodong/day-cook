import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {UserCenterPage} from "../user-center/user-center";

@Component({
  selector: 'page-mycook',
  templateUrl: 'mycook.html',
})
export class MycookPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MycookPage');
  }
  back(){
    this.navCtrl.pop();
  }

  user(){
    this.navCtrl.push(UserCenterPage)
  }

}
