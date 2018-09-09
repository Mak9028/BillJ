import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { HomePage } from '../home/home';
import { BillpreparationPage } from '../billpreparation/billpreparation';
import { ProductPage } from '../product/product';
import { LoginPage } from '../login/login';

/**
 * Generated class for the ManuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

export interface PageInterface {
  title: string;
  pageName: any;
  tabComponent?: any;
  index?: number;
  icon: string;
}


@IonicPage()
@Component({
  selector: 'page-manu',
  templateUrl: 'manu.html'
})




export class ManuPage {

  rootPage = HomePage;

  @ViewChild(Nav) nav: Nav;


  pages: PageInterface[] = [
    { title: 'Home', pageName: HomePage, icon: 'home' },
    { title: 'Bill Making', pageName: BillpreparationPage, icon: 'contacts' },
    { title: 'Product List', pageName: ProductPage, icon: 'shuffle' },
   // { title: 'Logout', pageName: LoginPage, icon: 'exit' },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManuPage');
  }

  logout(){
    this.navCtrl.setRoot(LoginPage);
  }

  openPage(page: PageInterface) {
    let params = {};
 
    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }
 
    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      // Tabs are not active, so reset the root page 
      // In this case: moving to or from SpecialPage
      this.nav.setRoot(page.pageName, params);
    }
  }


 
  isActive(page: PageInterface) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNav();
 
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }

    


    
 
    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }



}


