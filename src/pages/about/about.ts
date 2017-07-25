import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {CookService} from "../../cook.service";
import 'rxjs/add/operator/map';
import {SearchPage} from "../search/search";
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage implements OnInit{
  allpic = [];
  constructor(public navCtrl: NavController,public cs:CookService)
  {
  }
  ngOnInit():void{
    this.cs.all_p().subscribe(data=>{
      this.allpic = data;
    });

  }
  search(){
    this.navCtrl.push(SearchPage)
  }

}
