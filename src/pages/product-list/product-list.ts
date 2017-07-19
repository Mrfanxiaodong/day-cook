import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MycookPage} from "../mycook/mycook";
import {AboutPage} from "../about/about";
import {HomePage} from "../home/home";

/**
 * Generated class for the UserCenterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductListPage');
  }
  back(){
    this.navCtrl.pop(ProductListPage)

  }
}
