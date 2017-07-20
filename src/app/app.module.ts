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
import {HomeTwoCaiPage} from "../pages/home-two-cai/home-two-cai";

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
    HomeTwoCaiPage
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
    HomeTwoCaiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CookService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
