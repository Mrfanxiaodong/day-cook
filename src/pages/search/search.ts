import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  li:string;

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage')
  }

  back(){
    this.navCtrl.pop(SearchPage)
  }

  // 搜索框
  getItems(){
    console.log(this.li)
  }



}
