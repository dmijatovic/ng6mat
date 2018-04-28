import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Help module components
import { HelpPageComponent } from './help-page/help-page.component';

//help child routes
//note! base route is defined in app.module
let routes:Routes = [{
	//help/
	path: '', component: HelpPageComponent
}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HelpPageComponent]
})
export class HelpModule { }
