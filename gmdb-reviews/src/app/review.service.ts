import { Injectable } from '@angular/core';
import { Review } from './review';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  reviews: Review[];

  constructor() {
    this.reviews = [];
   }

  addReview(review: Review){
    this.reviews.push(review);
  }

  getReviews(movieId: string) : Observable<Review[]>{
    return of(this.reviews.filter(review => review.movieId === movieId));
  }

}
