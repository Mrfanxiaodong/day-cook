import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ProductListPage} from "../product-list/product-list";

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
}
