import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//loader component and service
import { AppLoaderComponent } from './loader.component';
import { AppLoaderService } from './loader.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers:[
    AppLoaderService
  ],
  declarations: [
    AppLoaderComponent
  ],
  exports:[
    AppLoaderComponent
  ]
})
export class AppLoaderModule { }
