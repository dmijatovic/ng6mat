//angular
import { Injectable } from '@angular/core';
//material modal/dialog reference
import { MatDialog } from '@angular/material';
//mpoint preference modal
import { AppPreferenceModal } from './preference.modal';
/**
 * Preference modal service
 * use it to show modal and ask for confirmation
 * modal itself will save preference in localStorage
 * SEE EXAMPLE of configuration object prefrence.config.example.ts
 */
//-----------------------------------------------
@Injectable()
export class AppPreferenceModalService {
  constructor(
    private dialog: MatDialog
  ){
    //console.log("PreferenceModalService...constructor()");
  }
  /**
   * Get doNotAsk value from localStorage for specific action
   * @param cfg PreferenceModal configuration object
   * @param cfg.preference.localStorage: string
   */
  doNotShow(cfg){
    //debugger
    if (localStorage){
      let dns = localStorage.getItem(
        cfg.preference.localStorage
      )
      //do not ask!
      if (dns == "true"){
        return true;
      } else {
        return false;
      }
    }else{
      console.error("PreferenceModalService...cannot access locaStorage");
      return false;
    }
  }
  /**
   * Show modal and ask for action
   * @param cfg: MpointPreferenceModal object
   * @param cfg.mdIcon: material icon
   * @param cfg.buttons: array of buttons to show
   * @param cfg.bodyHtml: body of modal
   * @param cfg.preference: preference object
   */
  showPreferenceModal(cfg:any){
    //show modal
    let pm = this.dialog.open(AppPreferenceModal, {
      //disable user clicking away from form
      disableClose: true,
      //inject configuration as data
      data: cfg
    });
    //return modal reference as observable
    return pm.afterClosed();
  }
}

/**
 * Example configuration preference.modal
 */
export const examplePreferenceModalCfg={
  mdIcon:"info_outline",
  buttons:[{
    value: "ok",
    label: "OK, I got it!",
    class: "primary"
  }],
  bodyHtml:`
    <div class="center-text">
      <div class="size-xl">How to create a preference modal?</div>
    </div>
    <ol>
      <li>Define configuration object like this one</li>
      <li>Import preference modal service into you component</li>
      <li>Check user preference with function doNotShow()</li>
      <li>If doNotShow() returns false call showPreferenceModal()</li>
      <li>Pass configuration object and subscribe to response</li>
    </ol>
    <p>
      For exact implementation see showPreferenceModal() of this page.
    </p>
  `,
  preference:{
    show: true,
    label: "Don't show this message again",
    localStorage: 'process.pro.example.preference.modal.info'
  },
  //show message delayed
  //note! not part of the service
  //it should be implemented on page itself using setTimeout
  delay: 2000,
  //automatically close modal after 15 sec.
  closeAfterMs: 15000
}



