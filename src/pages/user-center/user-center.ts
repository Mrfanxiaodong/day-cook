import {Component,OnInit} from '@angular/core';
import {NavController,NavParams} from 'ionic-angular';
import 'rxjs/add/operator/map';
import {CookService} from "../../cook.service";
import { AlertController } from 'ionic-angular';
import {MycookPage} from "../mycook/mycook";

@Component ({
  selector: 'page-user-center',
  templateUrl: 'user-center.html',
})
export class UserCenterPage implements OnInit {
  ngOnInit (): void {

}

  tab: string = 'login';
  uname: string;
  upsd: string;
  users:string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public cs: CookService,
              public alertCtrl: AlertController)
          {
              this.users = navParams.data
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
      subTitle: '您已经注册成功！',
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {

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
  opinion(){

  }


  subButton(){
    /*注册*/
    if (this.tab == 'zc'){

      this.cs.register(this.uname,this.upsd).subscribe(data=>{
        this.users = this.uname;
        this.showAlert2();
        this.navCtrl.setRoot(MycookPage,this.users);
      });
    }else{

      /*登录*/

      this.cs.login(this.uname,this.upsd).subscribe(data=>{
        console.log(data);
        if(data == '您的账号或密码错误'){
          this.showAlert();
        }else{
          this.users = data;
          this.navCtrl.setRoot(MycookPage,this.users);
        }
      });
    }
  }
}
