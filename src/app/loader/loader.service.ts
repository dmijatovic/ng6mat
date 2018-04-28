import { Injectable } from '@angular/core';

import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class AppLoaderService {
  constructor(){
    console.log('AppLoaderService...started');
  }

  private ShowLoader:boolean=true;
  showLoader = new Subject<boolean>();
  showLoader$ = this.showLoader.asObservable();

  setShowLoader(state:boolean){
    this.ShowLoader = state;
    this.showLoader.next(state);
  }

  private LoaderDef={
    pageId:<string>'app-root',
    loaderStyle:<string>'square-spin',
    loaderType:<string>'page',
    loaderSolid:<boolean>true
  };
  loaderDef = new Subject();
  loaderDef$ = this.loaderDef.asObservable();
  /**
   * Set loader definitions to loader which subscribed to this subject
   * NOTE! if more loaders subscribe implement filter using loaderId
   * @param d.loaderId:string, which loader should load this definition.
   * @param d.loaderStyle:string, see loader.component.html for valid 'keys'
   * @param d.loaderType:string, values: page/component
   * @param d.loaderSolid:boolean, true/false
   */
  setLoaderDef(d){
    this.LoaderDef = d;
    this.loaderDef.next(d);
  }
}
