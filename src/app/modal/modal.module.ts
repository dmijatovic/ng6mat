import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//material modules
import {
  MatDialogModule, MatCheckboxModule, MatButtonModule
} from '@angular/material';

import { AppPreferenceModal } from './preference.modal';
import { AppPreferenceModalService } from './preference.modal.service';

@NgModule({
  imports: [
    CommonModule, FormsModule,
    MatDialogModule, MatCheckboxModule,
    MatButtonModule
  ],
  declarations: [
    AppPreferenceModal
  ],
  exports:[
    AppPreferenceModal
  ],
  providers:[
    AppPreferenceModalService
  ],
  entryComponents:[
    AppPreferenceModal
  ]
})
export class AppModalModule { }
