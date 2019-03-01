import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular/navigation/view-controller';

/**
 * Generated class for the SbRatingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sb-rating',
  templateUrl: 'sb-rating.html'
})
export class SbRatingComponent {

  text: string;
  userRating : any = 0;
  showCommentBox : Boolean;

  constructor(public viewCtrl: ViewController) {
    console.log('Hello SbRatingComponent Component');
    this.text = 'Hello World';
    this.showCommentBox = false;
  }

  /**
   *
   * @param {number} ratingCount
   */
  rateContent(userRating){
    this.userRating = userRating;
    this.showCommentBox = true;
    console.log(this.showCommentBox);
    }
    closePopover(){
      this.viewCtrl.dismiss();
    }

}
