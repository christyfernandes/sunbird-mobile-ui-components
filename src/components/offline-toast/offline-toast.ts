import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the OfflineToastComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'offline-toast',
  templateUrl: 'offline-toast.html'
})
export class OfflineToastComponent {

  text: string;

  constructor(public toastController : ToastController) {
    console.log('Hello OfflineToastComponent Component');
    this.text = 'Hello World';
    this.presentToastWithOptions();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      message: 'You are offline',
      showCloseButton: true,
      //icon : 'information',
      position: 'top',
      closeButtonText: '',
      cssClass: 'toastAfterHeader'
    });
    toast.present();
  }


}
