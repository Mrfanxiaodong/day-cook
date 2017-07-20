import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CookService} from "../../cook.service";

/**
 * Generated class for the HomeShipuPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-home-shipu',
  templateUrl: 'home-shipu.html',
})
export class HomeShipuPage implements OnInit{
  fenlist;
  fenlist_caishi;
  fenlist_cj;
  constructor(public navCtrl: NavController, public navParams: NavParams, public cs:CookService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeShipuPage');
  }
  ngOnInit(): void {
    this.cs.all_seven().subscribe(data => {
      this.fenlist = data;
     });
    this.cs.alld_seventwo().subscribe(data => {
      this.fenlist_caishi = data;
    });
    this.cs.all_sevenmore().subscribe(data => {
      this.fenlist_cj = data;
    });
  }
}
