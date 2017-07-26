import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CookService} from "../../cook.service";

/**
 * Generated class for the HomeTwoCai2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-home-two-cai2',
  templateUrl: 'home-two-cai2.html',
})
export class HomeTwoCai2Page implements OnInit{
  caidetail;
  oldid;
  onlydata;
  inpvalue;
  constructor(public navCtrl: NavController, public navParams: NavParams,public cs:CookService) {
    this.caidetail = this.navParams.get('cai');
    this.oldid=this.caidetail.id;
    console.log(this.oldid)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeTwoCai2Page');
  }
  ngOnInit():void{
    this.cs.ping(this.oldid).subscribe(data=>{
      this.onlydata = data;
    });

  }
  showPrompt(){
    this.cs.inpp(this.inpvalue,this.oldid).subscribe(data=>{

    });
  }
}
