//angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//material modules
import {
  MatFormFieldModule, MatInputModule,
  MatIconModule, MatButtonModule
} from '@angular/material';

//----------------------------
// CUSTOM SHARED!!! APP COMPONENTS
//only search box without service integration
import { SearchBoxOnly } from './searchbox/searchbox';
//loader component and service
//import { LoaderComponent } from './loader/loader.component';
//modal with preference saved in localStorage
//import { AppPreferenceModal } from './modal/preference.modal';
//import { AppPreferenceModalService } from './modal/preference.modal.service';

@NgModule({
  imports: [
    CommonModule, FormsModule,
    MatFormFieldModule, MatInputModule,
    MatIconModule, MatButtonModule
  ],
  declarations: [
    SearchBoxOnly,
    //LoaderComponent,
    //AppPreferenceModal
  ],
  exports:[
    SearchBoxOnly,
    //LoaderComponent,
    //AppPreferenceModal
  ],
  providers:[
    //AppPreferenceModalService
  ],
  entryComponents:[
    //AppPreferenceModal
  ]
})
export class AppComponentsModule { }
