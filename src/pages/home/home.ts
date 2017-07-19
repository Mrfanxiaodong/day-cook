import {Component, OnInit, ViewChild} from '@angular/core';
import { NavController,Slides } from 'ionic-angular';
import 'rxjs/add/operator/map';
import {CookService} from "../../cook.service";

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
  this.cs.all().subscribe(data=>{
    this.cookarr = data;
  });
  this.cs.alld_more().subscribe(data=>{
      this.d_morepic = data;
    })
    this.cs.alld_two().subscribe(data=>{
      this.d_two = data;
    })

  }


  // go(){
  //   this.navCtrl.push(MycookPage,{uname:'tom'})
  // }


}

