import { Component, OnInit, Input } from '@angular/core';
import { ReviewsService } from '../reviews.service';
import { Review } from '../review';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'addReviewForm',
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
    this.reviews;
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
  }

  // addReview(){
  //   this.router.navigate([`/review/add`]); 
  // }

  toggleAddReviewForm(){
    this.showAddReviewForm ? this.showAddReviewForm = false : this.showAddReviewForm = true;
  }
}
