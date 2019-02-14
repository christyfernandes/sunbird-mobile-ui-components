import { Component } from '@angular/core';

/**
 * Generated class for the TabsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'library',
  templateUrl: 'library.html'
})
export class LibraryComponent {

  text: string;

  constructor() {
    this.text = `
    <ion-tabs>
        <ion-tab tabIcon="water library" tabTitle="Library" [root]="tab1"></ion-tab>
        <ion-tab tabIcon="leaf scan" tabTitle="Scan" [root]="tab2"></ion-tab>
        <ion-tab tabIcon="flame courses" tabTitle="Courses" [root]="tab3"></ion-tab>
      </ion-tabs>`;
  }

}
