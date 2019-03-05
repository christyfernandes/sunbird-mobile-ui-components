import { Component } from '@angular/core';

/**
 * Generated class for the SbDownloadPopupComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sb-download-popup',
  templateUrl: 'sb-download-popup.html'
})
export class SbDownloadPopupComponent {

  text: string;
  showPopover = true;

  constructor() {
    console.log('Hello SbDownloadPopupComponent Component');
    this.text = 'Hello World';
  }

  togglePopover(){
    
  }

}
