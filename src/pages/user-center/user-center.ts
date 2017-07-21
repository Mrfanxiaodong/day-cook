import {Component,OnInit} from '@angular/core';
import {NavController,NavParams} from 'ionic-angular';
import 'rxjs/add/operator/map';
import {CookService} from "../../cook.service";
import { AlertController } from 'ionic-angular';

@Component ({
  selector: 'page-user-center',
  templateUrl: 'user-center.html',
})
export class UserCenterPage implements OnInit {
  ngOnInit (): void {

}

  tab: string = 'zc';
  uname: string;
  upsd: string;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public cs: CookService,
              public alertCtrl: AlertController) {

  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: '尊敬的用户,您好!',
      subTitle: '您的账号或密码错误,请重新输入!',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert2() {
    let alert = this.alertCtrl.create({
      title: '尊敬的用户,您好!',
      subTitle: '您已经注册成功,请登录！',
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log ('ionViewDidLoad UserCenterPage');

  }

  //返回函数
  back() {
    this.navCtrl.pop (UserCenterPage)
  }

  //切换类函数
  switchTab(tab: string) {
    this.tab = tab;
  }

  user=[]

  subButton(){
    if (this.tab == 'zc'){
      console.log(123);
      this.cs.register(this.uname,this.upsd).subscribe(data=>{
        this.showAlert2();
      });
    }else{
      this.cs.login(this.uname,this.upsd).subscribe(data=>{
        console.log(data)
        if(data == '您的账号或密码错误'){
          this.showAlert();
        }else{
          this.navCtrl.pop(UserCenterPage);
        }
      });
    }
  }

}
