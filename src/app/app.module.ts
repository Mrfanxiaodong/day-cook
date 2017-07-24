import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {FoundPage} from "../pages/found/found";
import {MycookPage} from "../pages/mycook/mycook";
import {HttpModule} from "@angular/http";
import {CookService} from "../cook.service";
import {UserCenterPage} from "../pages/user-center/user-center";
import {ProductListPage} from "../pages/product-list/product-list";
import {SearchPage} from "../pages/search/search";
import {HomeTwoCaiPage} from "../pages/home-two-cai/home-two-cai";
import {HomeTwoCai2Page} from "../pages/home-two-cai2/home-two-cai2";
import {FoundCenterPage} from "../pages/found-center/found-center";
import {HomeShipuPage} from "../pages/home-shipu/home-shipu";
import {HomeVideoPage} from "../pages/home-video/home-video";
import {HomeClassPage} from "../pages/home-class/home-class";
import {CookactivePage} from "../pages/cookactive/cookactive";
import {CollectionPage} from "../pages/collection/collection";
import {SetUpPage} from "../pages/set-up/set-up";
import {NoticePage} from "../pages/notice/notice";
import {ShoppingCartPage} from "../pages/shopping-cart/shopping-cart";
import {FuliPage} from "../pages/fuli/fuli";
import {OrderPage} from "../pages/order/order";
import {KechengPage} from "../pages/kecheng/kecheng";
import {SignPage} from "../pages/sign/sign";
import {FootPage} from "../pages/foot/foot";
import {AddressPage} from "../pages/address/address";
import {ProblemPage} from "../pages/problem/problem";
import {YijianPage} from "../pages/yijian/yijian";
import {TouxiangPage} from "../pages/touxiang/touxiang";
import {GuanzhuPage} from "../pages/guanzhu/guanzhu";
import {FengchePage} from "../pages/fengche/fengche";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FoundPage,
    MycookPage,
    UserCenterPage,
    ProductListPage,
    SearchPage,
    HomeTwoCaiPage,
    HomeTwoCai2Page,
    FoundCenterPage,
    HomeShipuPage,
    FoundCenterPage,
    HomeVideoPage,
    FoundCenterPage,
    HomeClassPage,
    CookactivePage,
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
    YijianPage
  ],
  imports: [
    BrowserModule,HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: 'true'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FoundPage,
    MycookPage,
    UserCenterPage,
    ProductListPage,
    SearchPage,
    HomeTwoCaiPage,
    HomeTwoCai2Page,
    CookactivePage,
    FoundCenterPage,
    HomeShipuPage,
    FoundCenterPage,
    HomeVideoPage,
    FoundCenterPage,
    HomeClassPage,
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
    YijianPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CookService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
