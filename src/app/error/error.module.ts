import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, Routes, RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material';

import { ErrorPageComponent } from './error-page/error-page.component';

/**
 * Error routes defined in app
 */
const routes = [{
  path: '',
  redirectTo: '500',
  pathMatch: 'full'
}, {
  path: ':eid',
  component: ErrorPageComponent
}];


@NgModule({
  imports: [
    CommonModule, MatButtonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ErrorPageComponent
  ],
  exports:[
    ErrorPageComponent
  ]
})
export class ErrorModule { }
