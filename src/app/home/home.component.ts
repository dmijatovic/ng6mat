import { Component, OnInit } from '@angular/core';

//app services
import { AppLoaderService } from '../loader/loader.service';
import {
  AppPreferenceModalService, examplePreferenceModalCfg
} from '../modal/preference.modal.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host:{
    "class":"app-body"
  }
})
export class HomeComponent implements OnInit {
  constructor(
    private loader: AppLoaderService,
    private modal: AppPreferenceModalService
  ){}

  ngOnInit() {

    this.demoLoaderAndModal();

  }

  demoLoaderAndModal(){
    //debugger
    //demo loader first
    setTimeout(()=>{
      this.showLoader(false);
    },3000);
    //demo preference modal
    setTimeout(()=>{
      this.showPreferenceModal();
    },5000);
  }
  /**
   * Demo preference modal
   */
  showPreferenceModal(){
    //debugger
    //check if need showing first -> doNotAsk
    if (this.modal.doNotShow(examplePreferenceModalCfg) == false){
      this.modal.showPreferenceModal(
        examplePreferenceModalCfg
      ).subscribe((d)=>{
        //debugger
        //answer or timer response come back here
        console.log("modal answer...", d);
      });
    }
  }
  /**
   * Can deactive function as
   * example using router guard to leave the page
   */
  canDeactivate(){
    return true;
  }
  /**
   * Show/Hide loader
   */
  showLoader(b){
    this.loader.setShowLoader(b);
  }

}
