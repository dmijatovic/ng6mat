import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AppLayoutPage } from './page/app-layout-page';


@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [
    FooterComponent, HeaderComponent, AppLayoutPage
  ],
  exports:[
    FooterComponent, HeaderComponent, AppLayoutPage
  ]
})
export class AppLayoutModule { }
