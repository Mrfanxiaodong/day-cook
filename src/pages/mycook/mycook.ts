import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {UserCenterPage} from "../user-center/user-center";

@Component({
  selector: 'page-mycook',
  templateUrl: 'mycook.html',
})
export class MycookPage {
  users:string
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    if (navParams.data.length != null){
      this.users= navParams.data;
    }else{
      this.users = '登录/注册';
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MycookPage');
  }

  user(){
    if (this.navParams.data.length != null){

    }else{
      this.navCtrl.push(UserCenterPage)
    }

  }

}
