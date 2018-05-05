/**
 * Modal stores users prefference in localStorage
 * askShowMsg provides info about the preference and where to store it
 * buttons array provides info about the buttons to be loaded
 * answer is posted back after user clicks the button
 * mdIcon is used to define icon to be loaded
 * bodyHtml is modal body html *
 */

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatCheckbox, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-preference-modal',
  templateUrl: './preference.modal.html',
  //styles need to global to overwrite material defaults
  //styleUrls:['./preference.modal.scss'],
  host: {
    "class": "app-preference-modal"
  }
})
export class AppPreferenceModal implements OnInit {
  /** material icon value */
  mdIcon: string;
  /** array of buttons to show */
  buttons=[/* expected format
  {
    value: "yes",
    label: "YES",
    class: "cta"
  }*/];
  /** modal body html */
  bodyHtml:string;
  /** preference object */
  preference={
    show:<boolean>null,
    value:<boolean>false,
    label:<string>"Don't show this message again",
    localStorage:<string>null
  }
  /**
   * Does modal should close automatically after specific time?
   * time indicated in miliseconds
   */
  closeAfterMs:number=null;

  constructor(
    //add this component as dialog box
    public dialogRef: MatDialogRef<AppPreferenceModal>,
    @Inject(MAT_DIALOG_DATA) private data:any
  ) {
    //console.log("ProPreferenceModal...started");
  }
  ngOnInit() {
    //debugger
    this.mapDataToProps(this.data);
    //debugger
    //console.log("preference.modal.config...", );
  }
  /**
   * Map injected data to component props
   * @param d
   */
  mapDataToProps(d){
    //debugger
    let props = Object.keys(d);
    props.map((p)=>{
      this[p] = d[p];
    });
    //load preference
    this.loadPreference();
    //apply timer (if any)
    this.applyTimer();
  }
  /**
   * Load preference from localStorage
   */
  loadPreference(){
    //debugger
    if (this.preference.localStorage){
      if (localStorage){
        let val = localStorage.getItem(
          this.preference.localStorage
        )
        if (val=="true"){
          this.preference.value = true;
        }else{
          this.preference.value = false;
        }
      }else{
        console.error("Cannot save modal preference in localStorage!");
      }
    }
  }
  /**
   * Apply timer for modal to close itself automatically
   */
  applyTimer(){
    //debugger
    if (this.closeAfterMs &&
      this.closeAfterMs > 1000){
      setTimeout(()=>{
        //close after time expires
        this.dialogRef.close({
          status: "timer",
          data: this.closeAfterMs
        });
      }, this.closeAfterMs)
    }
  }
  /**
   * What choice user made / button pressed
   * @param choice: index
   */
  answer(choice) {
    //console.log("Popup says yes!");
    this.dialogRef.close({
      status: "success",
      data: this.buttons[choice]
    });
  }
  /**
   * Save preference in localStorage
   * @param e
   */
  setPreference(){
    //debugger
    //console.log("Preference...", this.askShowMsg.value);
    if (localStorage){
      localStorage.setItem(
        this.preference.localStorage,
        this.preference.value.toString()
      )
    }else{
      console.error("Cannot save modal preference in localStorage!");
    }
  }
  closeError(e) {
    //console.log("Popup says yes!");
    this.dialogRef.close({
      status: "500",
      error: e
    });
  }
}
