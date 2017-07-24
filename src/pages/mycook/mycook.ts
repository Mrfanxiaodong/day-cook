import {Component} from '@angular/core';
import {NavController,NavParams} from 'ionic-angular';
import {UserCenterPage} from "../user-center/user-center";
import {CollectionPage} from "../collection/collection";

import {SetUpPage} from "../set-up/set-up";
import {NoticePage} from "../notice/notice";
import {ShoppingCartPage} from "../shopping-cart/shopping-cart";
import {FuliPage} from "../fuli/fuli";
import {OrderPage} from "../order/order";
import {KechengPage} from "../kecheng/kecheng";
import {SignPage} from "../sign/sign";
import {FootPage} from "../foot/foot";
import {AddressPage} from "../address/address";
import {ProblemPage} from "../problem/problem";
import {YijianPage} from "../yijian/yijian";
import {TouxiangPage} from "../touxiang/touxiang";
import {GuanzhuPage} from "../guanzhu/guanzhu";
import {FengchePage} from "../fengche/fengche";

@Component ({
  selector: 'page-mycook',templateUrl: 'mycook.html',
})
export class MycookPage {
  users: string;
  number: number;
  show: boolean;
  isLogin: boolean;

  pageString = [
    SetUpPage,
    NoticePage,
    TouxiangPage,
    GuanzhuPage,
    FengchePage,
    CollectionPage,
    ShoppingCartPage,
    FuliPage,
    OrderPage,
    KechengPage,
    SignPage,
    FootPage,
    AddressPage,
    ProblemPage,
    YijianPage,
  ]

  constructor(public navCtrl: NavController,public navParams: NavParams) {

    if (navParams.data.length != null) {
      this.users = navParams.data;
      this.number = 4;
      this.show = true;
      this.isLogin=true;
    } else {
      this.users = '登录/注册';
      this.number = 0;
      this.show = false
    }
  }

  ionViewDidLoad() {
    console.log ('ionViewDidLoad MycookPage');
  }

  user(num) {
    if (this.isLogin) {
      this.navCtrl.push (this.pageString[num]);
    } else {
      this.navCtrl.push (UserCenterPage);
    }
  }

}
