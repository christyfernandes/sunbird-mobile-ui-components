import { Component } from '@angular/core';
import {ElementRef,Renderer2} from '@angular/core';
// @ViewChild('someVar') input:ElementRef;
/**
 * Generated class for the OfflineComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'offline',
  templateUrl: 'offline.html'
})
export class OfflineComponent {

  text: string;
  offline: OfflineComponent;
  closeClicked = false;
  shownGroup : Boolean;

  constructor(private rd: Renderer2,private _elementRef : ElementRef) {
    console.log(this.rd); 
    console.log('Hello OfflineComponent Component');
    this.text = 'Hello World';
    this.closeClicked === false;
    this.shownGroup == false;
  }
 
  removeComponent(){
    console.log("ofFlineComonent",this.offline);
    console.log("sb-offline-mesg"+document.querySelector('sb-offline-msg'));

    this._elementRef.nativeElement.querySelector('div');
    console.log("Div seleccted",document.getElementById('sb-offline-msg'));
  }  
  
  
  closeComp(){
    console.log("Close CLicked");
    console.log(this.closeClicked);
    this.closeClicked = true;
    console.log(this.closeClicked);
  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
    }
  }
  // to check whether the card is toggled or not
  isGroupShown(group) {
    return this.shownGroup === group;
  }
}
