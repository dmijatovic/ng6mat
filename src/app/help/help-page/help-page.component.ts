import { Component, OnInit } from '@angular/core';

//app services
import { AppLoaderService } from '../../loader/loader.service';

@Component({
  selector: 'pro-help-page',
  templateUrl: './help-page.component.html',
  styleUrls: ['./help-page.component.scss'],
  host:{
    "class":"app-body"
  }
})
export class HelpPageComponent implements OnInit {

  constructor(
    private loader:AppLoaderService
  ){}

  ngOnInit() {
    //debugger
    setTimeout(()=>{
      this.showLoader(false);
    },1000);
  }

  /**
   * Show/Hide loader
   */
  showLoader(b){
    this.loader.setShowLoader(b);
  }
}
