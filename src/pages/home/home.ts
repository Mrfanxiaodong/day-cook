import {Component, OnInit, ViewChild} from '@angular/core';
import { NavController,Slides } from 'ionic-angular';
import 'rxjs/add/operator/map';
import {CookService} from "../../cook.service";
import {HomeTwoCaiPage} from "../home-two-cai/home-two-cai";
import {HomeTwoCai2Page} from "../home-two-cai2/home-two-cai2";
import {AboutPage} from "../about/about";
import {HomeClassPage} from "../home-class/home-class";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements OnInit{
  cookarr = [];
  d_morepic=[];
  d_two=[];
  constructor(public navCtrl: NavController,
              public cs:CookService
  ) {}

  ngOnInit(): void {
  this.cs.all_seven().subscribe(data=>{
    this.cookarr = data;
  });
  this.cs.all_sevenmore().subscribe(data=>{
      this.d_morepic = data;
    })
    this.cs.alld_seventwo().subscribe(data=>{
      this.d_two = data;
    })

  }
  gohome_two_cai(params?:object){
    this.navCtrl.push(HomeTwoCaiPage,{cai:params})
  }
  gohome_two_cai2(params?:object){
    this.navCtrl.push(HomeTwoCai2Page,{cai:params})
  }
  goabout(){
    this.navCtrl.push(AboutPage)
  }
  gohome_class(){
    this.navCtrl.push(HomeClassPage)
  }
}

