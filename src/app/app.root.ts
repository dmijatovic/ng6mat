import { Component } from '@angular/core';

import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

//local loader service
import { AppLoaderService } from './loader/loader.service';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <app-loader *ngIf="showLoader"
      [loaderStyle]="loaderStyle"
      [loaderType]="loaderType"
      [loaderSolid]="loaderSolid">
    </app-loader>
  `,
})
export class AppRoot {
  //loader listeners
  showLoader$:Subscription;
  loaderDef$:Subscription;
  //loader props defaults
  showLoader:boolean=true;
  loaderStyle:string='square-spin';
  loaderType:string='page';
  loaderSolid:boolean=true;
  constructor(
    private loader:AppLoaderService
  ){}
  ngOnInit(){
    this.listenForLoader();
  }
  /**
   * Listens for show/hide loader event issued by AppLoaderService
   */
  listenForLoader(){
    //listen for loader definitions
    this.loaderDef$ = this.loader.loaderDef$
    .pipe(
      filter((d:any) => d.loaderId=='app-root')
    )
    .subscribe((d:any)=>{
      this.loaderStyle = d.loaderStyle;
      this.loaderType = d.loaderType;
      this.loaderSolid = d.loaderSolid;
    });

    //listen for show/hide request
    this.showLoader$ = this.loader.showLoader$
    .subscribe((b)=>{
      //show/hide loader
      this.showLoader = b;
    });
  }
  ngOnDestroy(){
    this.showLoader$.unsubscribe();
  }
}
