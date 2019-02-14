import { Component, Input } from '@angular/core';

/**
 * Generated class for the AppHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-header',
  templateUrl: 'app-header.html'
})
export class AppHeaderComponent {
  @Input() pageName: any;

  text: string;
  code= `<ion-header class="sb-header">
  <ion-navbar class="sb-header-toolbar">
    <ion-toolbar>
    <ion-buttons class="only-md sb-hamburger" start>
          <button class="sb-hamburger-menu sb-hamburger-icon" ion-button icon-only>
            <ion-icon name="menu"></ion-icon>
          </button>
    </ion-buttons>
    <ion-title></ion-title>
    <ion-buttons end>
      <button ion-button icon-only>
       <ion-icon name="notifications-outline"></ion-icon>
      </button>
      <button ion-button icon-only>
       <ion-icon name="search"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
  </ion-navbar>
  </ion-header>`;

  constructor() {
  }

}
