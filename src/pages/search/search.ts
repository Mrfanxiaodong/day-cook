import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  shao:string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public cs:CookService) {
    this.shao = '取消';
  }
  li:string;
  zhan:string;


  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage')
  }

  back(){
    if(this.shao == '取消'){
      this.navCtrl.pop(SearchPage)
    }else{
      this.navCtrl.push(SearchonePage,{li:this.li,zhan:this.zhan})
    }

  }


  // 搜索框
  getItems(){
    console.log(this.li);
    this.cs.fasong(this.li).subscribe(data=>{
      console.log(data);
      this.zhan = data;
    });
    if(this.li){
      this.shao = '搜索';
    }else{
      this.shao = '取消';
    }


  }
}
