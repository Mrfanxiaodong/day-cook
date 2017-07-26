import {Component, ElementRef, ViewChild, Renderer} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MycookPage} from "../mycook/mycook";
import {AboutPage} from "../about/about";
import {HomePage} from "../home/home";

/**
 * Generated class for the UserCenterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {
  @ViewChild('d1') d1;
  name:string;
  jiage:string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,) {
    this.name = navParams.data.name;
    this.jiage = navParams.data.jiage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductListPage');
  }
  back(){
    this.navCtrl.pop(ProductListPage)
  }
  // ngAfterViewInit() {
  //   console.log(this.d1.nativeElement);
  //   this.d1.nativeElement.style.display='none'
  // }
  dianji(){
    this.d1.nativeElement.style.display='none'
  }






}
