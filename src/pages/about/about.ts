import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {CookService} from "../../cook.service";
import 'rxjs/add/operator/map';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage implements OnInit{
  acookarr = [];
  amore_pic=[];
  constructor(public navCtrl: NavController,public acs:CookService) {

  }
  ngOnInit():void{
    this.acs.all().subscribe(data=>{
        this.acookarr = data;
        console.log(this.acookarr)
    });
    this.acs.alld_two().subscribe(data=>{
     this.amore_pic = data;
     console.log(this.amore_pic)
    })
    }

}
