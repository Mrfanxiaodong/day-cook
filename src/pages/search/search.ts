import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
