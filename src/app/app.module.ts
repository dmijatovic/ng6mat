import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

//router modules
import { RouterModule } from '@angular/router';
import { AppRouterModule } from './app.routes';

//loader module
import { AppLoaderModule } from './loader/loader.module';
//modals
import { AppModalModule } from './modal/modal.module';
//shared components
import { AppComponentsModule } from './component/components.module';
//root component
import { AppRoot } from './app.root';

//-------------------
//app services
import { AppLoaderService } from './loader/loader.service';
//import { AppPreferenceModalService } from './components/modal/preference.modal.service';
import { AppPreferenceModalService } from './modal/preference.modal.service';

@NgModule({
  declarations: [
    AppRoot
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppComponentsModule,
    AppLoaderModule,
    AppModalModule,
    RouterModule,
    AppRouterModule
  ],
  providers: [
    AppLoaderService, AppPreferenceModalService
  ],
  bootstrap: [ AppRoot ]
})
export class AppModule { }
