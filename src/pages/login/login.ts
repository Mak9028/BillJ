import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ManuPage } from '../manu/manu';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usrname:any;
  passwrd:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    console.log("vale"+this.usrname,this.passwrd );
    this.navCtrl.setRoot(ManuPage);
  }


//    $("#login-button").click(function(event){
//          event.preventDefault();
  
//    $('form').fadeOut(500);
//   $('.wrapper').addClass('form-success');
//  });

}
