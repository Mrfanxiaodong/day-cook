import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ProductListPage} from "../product-list/product-list";
import {UserCenterPage} from "../user-center/user-center";
import {GouwuchePage} from "../gouwuche/gouwuche";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  productname:string;
  productjiage:string;
  users:string;

    constructor(public navCtrl: NavController,public navParams: NavParams) {
      this.productname = '墨西哥进口牛油';
      this.productjiage = '59.0';
      this.users = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }
  productlist(){
    this.navCtrl.push(ProductListPage,{name:this.productname,jiage:this.productjiage})
  }
  gouwuche(){
   this.navCtrl.push(UserCenterPage)
  }
}
