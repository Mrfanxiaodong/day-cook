import {Component,OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CookService} from "../../cook.service";
import {HomePage} from "../home/home";

@Component({
  selector: 'page-cookactive',
  templateUrl: 'cookactive.html',
})
export class CookactivePage implements OnInit{
  pet:string;
  coa=[];
  bo=[]
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public cs:CookService)
    {
      this.pet = 'dongtai'
    }

  ngOnInit(): void {

    this.cs.cooka().subscribe(data=>{
      console.log(data)
      this.coa = data;
    });

    this.cs.bozhu().subscribe(data=>{
      console.log(data);
      this.bo=data
    })

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CookactivePage');
  }
  back(){
    this.navCtrl.pop(HomePage)
  }

}
