import {Component, OnInit, ViewChild} from '@angular/core';
import { NavController,Slides } from 'ionic-angular';
import 'rxjs/add/operator/map';
import {CookService} from "../../cook.service";
import {HomeTwoCaiPage} from "../home-two-cai/home-two-cai";

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
}

