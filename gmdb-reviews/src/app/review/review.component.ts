import { Component, OnInit, Input } from '@angular/core';
import { Review } from '../review';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReviewsService } from '../reviews.service';

@Component({
  selector: 'reviewsList',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  reviews: Review[];
  @Input()
  movieId: string;
  showAddReviewForm: boolean;
  addReviewForm: FormGroup;
  
  constructor(private rs: ReviewsService, private router: Router, private fb: FormBuilder) {
    this.reviews = [];
    this.showAddReviewForm = false;
   }

  ngOnInit() {
    this.addReviewForm = this.fb.group({
      title:['' ,[Validators.required], Validators.maxLength(50)],
      description:['' ,[Validators.required,Validators.maxLength(255)]]
    })
    this.showReviews();
  }

  showReviews(){
    this.rs.getReviewsByMovieId(this.movieId).subscribe(reviews => this.reviews = reviews);
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

  toggleAddReviewForm(){
    this.showAddReviewForm ? this.showAddReviewForm = false : this.showAddReviewForm = true;
  }
}
