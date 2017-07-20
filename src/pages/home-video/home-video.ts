import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CookService} from "../../cook.service";
@Component({
  selector: 'page-home-video',
  templateUrl: 'home-video.html',
})
export class HomeVideoPage {

  cookarr = [];
  found=[];
  HomeVideoPage: any;

  constructor(public navCtrl: NavController, public cs:CookService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeVideoPage');
  }
  back(){
    this.navCtrl.pop(this.HomeVideoPage)

  }

  ngOnInit(): void {
    this.cs.allfound().subscribe(data=>{
      this.cookarr = data;
    });
    this.cs.allfound().subscribe(data=>{
      this.found = data;
    })
  }

}
