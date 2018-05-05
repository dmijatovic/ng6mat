//angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//--------------------
// app module components required for routes
import { AppComponentsModule } from './component/components.module';
import { AppLayoutModule } from './layout/layout.module';
import { AppLayoutPage } from './layout/page/app-layout-page';
import { HomeComponent } from './home/home.component';

//--------------------
//Services
//import { AuthGuard } from './oauth2/auth.guard';
//-------------------
// START ROUTES
// routes are defined in imported modules
let routes:Routes = [{
	//Home
  path: '',
  component: AppLayoutPage,
  //canActivate: [AuthGuard],
  children:[{
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },{
    path:'home',
    component: HomeComponent
  },{
    path: 'help',
    loadChildren: './help/help.module#HelpModule'
  },{
    path: 'error',
    loadChildren: './error/error.module#ErrorModule'
  },{
    //wildcard route match ALWAYS as last
    path: '**', redirectTo:'error/404', pathMatch:'full'
  }]
}]

@NgModule({
  imports:[
    AppLayoutModule,
    AppComponentsModule,
    //router as lastone (always)
    RouterModule.forRoot(routes)
  ],
  //providers:[ AuthGuard ],
  declarations: [
    HomeComponent
  ],
  exports:[
    HomeComponent
  ]
})
export class AppRouterModule{}
