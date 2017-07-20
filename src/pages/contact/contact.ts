import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ProductListPage} from "../product-list/product-list";
import {UserCenterPage} from "../user-center/user-center";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }
  productlist(){
    this.navCtrl.push(ProductListPage)
  }
  gouwuche(){
    this.navCtrl.push(UserCenterPage)
  }
}
