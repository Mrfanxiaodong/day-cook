import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {CookService} from "../../cook.service";
import 'rxjs/add/operator/map';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage implements OnInit{
  allpic = [];
  items = [];
  constructor(public navCtrl: NavController,public cs:CookService)
   {
      for (let i = 0; i < 1; i++) {

        this.items.push( this.items.length );
      }
      console.log(this.items)
   }
  ngOnInit():void{
    this.cs.all_p().subscribe(data=>{
      this.allpic = data;
    });

  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 1; i++) {
        this.items.push( this.items.length );
      }
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 2000);
  }

}
