import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'stars-rating',
  templateUrl: './stars-rating.component.html',
  styleUrls: ['./stars-rating.component.css']
})
export class StarsRatingComponent implements OnInit, OnChanges {

 
  @Input() 
  rating:number = 0;
  stars :number[] = []
  constructor() {
    this.stars = new Array<number>(0);
   }
  ngOnChanges(changes: SimpleChanges): void {
    this.stars = new Array<number>(this.rating)
  }

  ngOnInit(): void {
  }



  // @Input() 
  // set rating(rating:number) {
  //   this._rating = rating;
  //   this.stars = new Array<number>(rating);
  // }


}
