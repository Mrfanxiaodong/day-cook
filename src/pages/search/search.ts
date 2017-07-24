import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SearchonePage} from "../searchone/searchone";

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
  shao:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.shao = '取消';
  }
  li:string;


  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage')
  }

  back(){
    if(this.shao == '取消'){
      this.navCtrl.pop(SearchPage)
    }else{
      this.navCtrl.push(SearchonePage,this.li)
    }

  }

  // 搜索框
  getItems(){
    console.log(this.li)
    if(this.li){
      this.shao = '搜索';
    }else{
      this.shao = '取消';
    }

  }



}
