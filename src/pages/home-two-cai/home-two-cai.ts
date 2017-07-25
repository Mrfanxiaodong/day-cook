import { Component, OnInit} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {CookService} from "../../cook.service";
import 'rxjs/add/operator/map';
/**
 * Generated class for the HomeTwoCaiPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-home-two-cai',
  templateUrl: 'home-two-cai.html',
})
export class HomeTwoCaiPage implements OnInit{
  caidetail;
  oldid:string;
  pl:string;
  onlydata;
  inpvalue;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public cs:CookService,public alertCtrl: AlertController
            ) {
    this.caidetail = this.navParams.get('cai');
    this.oldid=this.caidetail.id;
    console.log(this.oldid)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeTwoCaiPage');
  }
  ngOnInit():void{
    this.cs.ping(this.oldid).subscribe(data=>{
       this.onlydata = data;
    });

  }
  showPrompt(){
      console.log('111')
      this.cs.inpp(this.inpvalue,this.oldid).subscribe(data=>{
        let alert = this.alertCtrl.create({
          title: '评论成功喽!',
          subTitle: '评论内容:'+this.inpvalue,
          buttons: ['确定']
        });
        this.cs.ping(this.oldid).subscribe(data=>{
          this.onlydata = data;
        });
        alert.present();
    });

  }
}
