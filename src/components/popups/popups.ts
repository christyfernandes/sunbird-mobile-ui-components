import { Component } from '@angular/core';
import {
  PopoverController
} from 'ionic-angular';
import { SbRatingComponent } from '../sb-rating/sb-rating';
import {SbPopupComponent} from '../sb-popup/sb-popup';
import { SbDownloadPopupComponent } from '../sb-download-popup/sb-download-popup';

/**
 * Generated class for the PopupsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'popups',
  templateUrl: 'popups.html'
})
export class PopupsComponent {

  text: string;

  constructor(private popoverCtrl: PopoverController,) {
    console.log('Hello PopupsComponent Component');
    this.text = 'Hello World';
  }


  openPopupInfo(event) {
    const popover = this.popoverCtrl.create(SbPopupComponent, {
      sbPopoverHeading:"Download",
      sbPopoverMainTitle:"Great Thinkers and their new religions",
      actionsButtons:[
        {
          btntext: "Download",
          btnClass: 'popover-color'
        },
      ],
      icon: null,
      metaInfo:"1 item (20 MB)",
      sbPopoverContent:"Some content might not be playable offline."
    }, {
      cssClass: 'sb-popover info',
      
    });
    popover.present({
      ev: event
    });
    popover.onDidDismiss((canDownload: boolean = false) => {
     console.log('dismissed');
    });
  }

  
openPopupDanger(event){
  const popover = this.popoverCtrl.create(SbPopupComponent, {
    sbPopoverHeading:"Delete",
    sbPopoverMainTitle:"Social Science Term 1",
    actionsButtons:[
      {
        btntext: "Delete",
        btnClass: 'popover-color'
      },
    ],
    icon: null,
    metaInfo:"30 items (200 MB)",
    sbPopoverContent:"Are you sure you want to delete ?"
  }, {
      cssClass: 'sb-popover danger',
      
    });
    popover.present({
      ev: event
    });
    popover.onDidDismiss((canDownload: boolean = false) => {
     console.log('dismissed');
    });
}
openPopupWarning(event){
  const popover = this.popoverCtrl.create(SbPopupComponent, {
    sbPopoverHeading:"Coming Soon",
    sbPopoverMainTitle:"Content coming soon",
    actionsButtons:[
      {
        btntext: "Interested",
        btnClass: 'popover-color'
      }
    ],
    icon:{
      md:"md-alert",
      ios:"ios-alert",
      className:""
    },
    metaInfo:"",
    sbPopoverContent:"Let us know if you are interested in this content"
  }, {
      cssClass: 'sb-popover warning',
      
    });
    popover.present({
      ev: event
    });
    popover.onDidDismiss((canDownload: boolean = false) => {
     console.log('dismissed');
    });
}

openNoInternetPopup() {
  const popover = this.popoverCtrl.create(SbPopupComponent, {
    sbPopoverHeading:"No connection",
    sbPopoverMainTitle:"No internet connection",
    actionsButtons:[
      
    ],
    icon:{
      md:"md-notifications-off",
      ios:"ios-notifications-off",
      className:""
    },
    metaInfo:"",
    sbPopoverContent:"Add this content to your download queue, once connection resumes ?"
  }, {
      cssClass: 'sb-popover warning',
      
    });
    popover.present({
      ev: event
    });
    popover.onDidDismiss((canDownload: boolean = false) => {
     console.log('dismissed');
    });
}

openNoBnadWidthPopup(){
  const popover = this.popoverCtrl.create(SbPopupComponent, {
    sbPopoverHeading:"Low bandwidth",
    sbPopoverMainTitle:"Low bandwidth network detected",
    actionsButtons:[
      {
        btntext: "Play Onlilne",
        btnClass: 'popover-color'
      },
      {
        btntext: "Download",
        btnClass: 'sb-btn sb-btn-normal sb-btn-info'
      }
    ],
    icon:{
      md:"md-sad",
      ios:"ios-sad",
      className:""
    },
    metaInfo:"",
    sbPopoverContent:"Consider downloading the content"
  }, {
      cssClass: 'sb-popover warning',
      
    });
    popover.present({
      ev: event
    });
    popover.onDidDismiss((canDownload: boolean = false) => {
     console.log('dismissed');
    });
}

openPopupRating(event)
{
  const popover = this.popoverCtrl.create(SbRatingComponent, {
    // sbPopoverHeading:"Rate the content",
    // actionsButtons:[
    //   {
    //     btntext: "Rate",
    //     btnClass: 'popover-color'
    //   },
    // ],
    // icon: {md:"md-sad",
    // ios:"ios-sad",
    // className:""},
    // metaInfo:"You have rated 3 stars",
   // sbPopoverContent:"Some content might not be playable offline."
  }, {
    cssClass: 'sb-popover info',
    
  });
  popover.present({
    ev: event
  });
  popover.onDidDismiss((canDownload: boolean = false) => {
   console.log('dismissed');
  });
}
openDownloadPopup() {
    const popover = this.popoverCtrl.create(SbDownloadPopupComponent, {}, {
      cssClass: 'sb-popover sb-popover-download  info',
      
    });
    popover.present({
      ev: event
    });
    popover.onDidDismiss((canDownload: boolean = false) => {
    console.log('dismissed');
    });
}

}
