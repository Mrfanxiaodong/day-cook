import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MycookPage} from "../mycook/mycook";
@Component({
  selector: 'page-set-up',
  templateUrl: 'set-up.html',
})
export class SetUpPage {
  outs:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.outs = "";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetUpPage');
  }
  back(){
    this.navCtrl.pop()
  }
  out(){
    this.navCtrl.setRoot(MycookPage,this.outs)
  }

}
