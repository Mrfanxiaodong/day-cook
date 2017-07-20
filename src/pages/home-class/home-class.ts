import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import {CookService} from "../../cook.service";
import {stringify} from "@angular/core/src/util";

/**
 * Generated class for the HomeClassPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-home-class',
  templateUrl: 'home-class.html',
})
export class HomeClassPage implements OnInit{

  classtus = [];
  constructor(public navCtrl: NavController,
              public cs:CookService)
  {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeClassPage');
  }

  back(){
    this.navCtrl.pop(HomeClassPage)
  }
  ngOnInit():void{
    this.cs.classtu().subscribe(data=>{
      this.classtus = data;
      console.log(this.classtus)
    });

  }
}
