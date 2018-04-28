//Angular dependencies
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

//Third parties dependencies
//--- here ---

//Local app depenencies
import { errMsg, oErrorMessage, typeErrMsg } from '../error.service';
import { AppLoaderService } from '../../loader/loader.service';

@Component({
  selector: 'app-error',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss'],
  host:{
    class:'app-page'
  }
})
export class ErrorPageComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private loaderSvc: AppLoaderService
  ){}
  /**
   * On init get error number which is send as parameter
   */
  ngOnInit() {
    //debugger
    //get error id
    this.route.params.subscribe((p)=>{
      console.log("error...", p);
      if (p['eid']){
        //set data to props
        this.dataToProps(
          //get message from service
          this.getMessage(p['eid'])
        );
      }else{
        //default is 500 error
        this.dataToProps(
          //get default message
          this.getMessage(500)
        );
      }
      //hide app loader after all
      //put it at the end of callstack
      setTimeout(()=>{
        this.toggleAppLoader(false)
      },1);
    },
    //log error here
    (e)=>console.error(e));
  }
  /**
   * Get message from service based on error number
   * parameter received as part of url
   * @param errNo
   */
  getMessage(errNo:number){
    //assign default
    let msg:typeErrMsg=errMsg["default"];
    //check if match
    if (errMsg[errNo]){
      msg = errMsg[errNo]
    }
    //return message
    return msg;
  }
  /**
   * Set received error message (data) into local component
   * props in order to be accessed from html template.
   * The props set to [this] component are identical
   * to oErrorMessage object props of typeErrMsg
   * @param data:typeErrMsg
   */
  dataToProps(data:typeErrMsg){
    let props = Object.keys(data);
    props.map((prop)=>{
      let item = data[prop];
      this[prop] = item;
    });
  }
  /**
   * Go back button using window history of the browser
   */
  goBack(){
    //just go back
    window.history.back();
  }
  /**
   * This function changes state of the page loader
   * this loader cover the complete page incl. header
   * @param state
   */
  toggleAppLoader(state:boolean){
    //true shows loader
    //false hides it
    this.loaderSvc.setShowLoader(state);
  }
}
