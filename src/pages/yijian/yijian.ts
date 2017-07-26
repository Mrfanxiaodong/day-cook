import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {CookService} from "../../cook.service";

/**
 * Generated class for the YijianPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation

 for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-yijian',
  templateUrl: 'yijian.html',
})
export class YijianPage {




  showxianshi(){
    alert("提交成功~");
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,public cs: CookService,public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad YijianPage');
  }
  showToast(cont:HTMLInputElement,name:HTMLInputElement,position: string){
    console.log(cont.value,name.value);
    let toast = this.toastCtrl.create({
      message: '收到您的建议啦~',
      duration: 2000,
      position: position
    });

    toast.present(toast);
    this.cs.fankui(cont.value,name.value).subscribe(data=>{

    });
  }


}
