import {Component,OnInit} from '@angular/core';
import {NavController,NavParams} from 'ionic-angular';
import 'rxjs/add/operator/map';
import {CookService} from "../../cook.service";

@Component ({
  selector: 'page-user-center',
  templateUrl: 'user-center.html',
})
export class UserCenterPage implements OnInit {

  tab: string = 'zc';
  uname: string;
  upsd: string;

  ngOnInit(): void {

  }

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public cs: CookService) {

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
      });
    }else{
      this.cs.login().subscribe(data=>{

        for (var i=0;i<data.length;i++){
          console.log(data[i]);
          console.log(data[i].uname,data[i].upsd);
          if (this.uname==data[i].uname && this.upsd == data[i].upsd){
            this.navCtrl.pop (UserCenterPage);
          }else{
            console.log('账号或密码错误')
          }
        }
      });
    }
  }

}
