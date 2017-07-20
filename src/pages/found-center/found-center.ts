import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MycookPage} from "../mycook/mycook";
import {AboutPage} from "../about/about";
import {HomePage} from "../home/home";
import {CookService} from "../../cook.service";


@Component({
  selector: 'page-found-center',
  templateUrl: 'found-center.html',
})
export class FoundCenterPage {
  caidetail;
  found=[];

  constructor(public navCtrl: NavController,  public navParams:NavParams) {
      this.caidetail = this.navParams.get('cai');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoundCenterPage');
  }
  back(){
    this.navCtrl.pop(FoundCenterPage)

  }

}
