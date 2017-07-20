import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FoundCenterPage} from "../found-center/found-center";
import {CookService} from "../../cook.service";


@Component({
  selector: 'page-found',
  templateUrl: 'found.html',
})
export class FoundPage {

  cookarr = [];
  found=[];

  constructor(public navCtrl: NavController, public cs:CookService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoundPage');
  }
  back(){
    this.navCtrl.pop();
  }

  founder(params?:object){
    this.navCtrl.push(FoundCenterPage,{cai:params})
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
