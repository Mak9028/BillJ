import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormArray, FormGroup, Validators, FormControl } from '@angular/forms';

/**
 * Generated class for the BillpreparationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-billpreparation',
  templateUrl: 'billpreparation.html',
})
export class BillpreparationPage {

  // public anArray:any=[];

  // public lenofarr:any;
  // btn:any
  // data:any;


  public anArray: any = [];
  public pointer: any;

  public form: FormGroup;



  p_name = new FormControl('', Validators.required);
  quantity = new FormControl('0', Validators.required);
  cost =new FormControl('0', Validators.required);
  total = new FormControl('', Validators.required);



  constructor(public navCtrl: NavController, public navParams: NavParams ,public _FB: FormBuilder) {
  
    //   this.btn=false;
    // this.data=false;  

 


    this.form = this._FB.group({
      technologies: this._FB.array([
        this.initTechnologyFields()
      ])  
    });

   

  }

  ionViewDidLoad() {
  
    console.log('ionViewDidLoad BillpreparationPage');
  }


  runTimeChange(i:any) {
    //this.total.value = this.quantity.value*this.cost.value;
    //this.form.value['quantity'];
    this.pointer=i=this.form.value.technologies.length;
    this.anArray[this.pointer-1] = this.form.value.technologies[i-1].cost * this.form.value.technologies[i-1].cost;
    console.log(  this.form.value.technologies[i-1].cost * this.form.value.technologies[i-1].cost, this.anArray[this.pointer-1]);

 }

   
   initTechnologyFields() : FormGroup
   {
      return this._FB.group({
        p_name:['', Validators.required],
        quantity:['', Validators.required],
        cost:['', Validators.required],
        total:['', Validators.required]
      });
   }



   
   addNewInputField() : void
   {
      const control = <FormArray>this.form.controls.technologies;
      control.push(this.initTechnologyFields());
   }



   /**
    * Programmatically removes a recently generated technology input field
    *
    * @public
    * @method removeInputField
    * @param i    {number}      The position of the object in the array that needs to removed
    * @return {none}
    */
   removeInputField(i : number) : void
   {
      const control = <FormArray>this.form.controls.technologies;
      control.removeAt(i);
   }



   /**
    * Receive the submitted form data
    *
    * @public
    * @method manage
    * @param val    {object}      The posted form data
    * @return {none}
    */
   manage(val : any) : void
   {
      console.dir(val);
   }


  // goTo() {
  //   console.log('this.anArray', this.anArray);
  //   this.data = true;
  // }
  // Add() {
  //   this.anArray.push({ 'value': '' });
  // }

  // remove(){
  //   ///this.anArray.
  // }

}
