import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CookService} from "../../cook.service";

/**
 * Generated class for the YijianPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-yijian',
  templateUrl: 'yijian.html',
})
export class YijianPage {
  name:string;
  cont:string;

  showxianshi(){
      alert("提交成功~");
  }
  showxianshi2(){
      alert("要写内容哦~");
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,public cs: CookService,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad YijianPage');
  }
  addopinion(cont:HTMLInputElement,name:HTMLInputElement){
    console.log(cont.value,name.value);
      this.cs.fankui(cont.value,name.value).subscribe(data=>{
        this.showxianshi();
      });
    }




}
