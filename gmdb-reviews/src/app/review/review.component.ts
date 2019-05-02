import { Component, OnInit, Input } from '@angular/core';
import { ReviewService } from '../review.service';
import { Review } from '../review';
import { Router } from '@angular/router';

@Component({
  selector: 'reviewsList',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  reviews: Review[];
  @Input()
  movieId: string;
  
  constructor(private rs: ReviewService, private router: Router) {
    this.reviews = [];
   }

  ngOnInit() {
    this.showReviews();
  }

  showReviews(){
    this.rs.getReviews(this.movieId).subscribe(reviews => this.reviews = reviews);
    // this.reviews.push({
    //   id:"1",
    //   userId:"1",
    //   movieId:"tt0848228",
    //   title:"Good movie",
    //   description:"terrible movie"
    // });
    // this.reviews.push({
    //   id:"2",
    //   userId:"1",
    //   movieId:"tt2395427",
    //   title:"terrible movie",
    //   description:"Good movie"
    // });
  }

  addReview(){
    this.router.navigate([`/review/add`]); 
  }
}
