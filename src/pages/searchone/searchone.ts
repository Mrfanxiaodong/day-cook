import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AboutPage} from "../about/about";
import {CookService} from "../../cook.service";

/**
 * Generated class for the SearchonePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-searchone',
  templateUrl: 'searchone.html',
})
export class SearchonePage implements OnInit{
  canshu:string;
  canshu2:string;
  fenlist = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public cs:CookService ) {
    this.canshu = navParams.data.li;
    this.canshu2 = navParams.data.zhan;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchonePage');
  }

  back(){
    this.navCtrl.popToRoot()
  }
  searchoneback(){
    this.navCtrl.pop()
  }
  ngOnInit():void{
    this.cs.fenlist().subscribe(data=>{
      this.fenlist = data;
      console.log(this.fenlist)
    });
  }



}
