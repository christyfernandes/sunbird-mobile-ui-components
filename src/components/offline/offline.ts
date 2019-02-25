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

  constructor(private rd: Renderer2,private _elementRef : ElementRef) {
    console.log(this.rd); 
    console.log('Hello OfflineComponent Component');
    this.text = 'Hello World';
  }
 
  removeComponent(){
    console.log("ofFlineComonent",this.offline);
    console.log("sb-offline-mesg"+document.querySelector('sb-offline-msg'));

    this._elementRef.nativeElement.querySelector('div');
    console.log("Div seleccted",document.getElementById('sb-offline-msg'));
    //document.querySelector('sb-offline-msg').remove();
  }   

}
