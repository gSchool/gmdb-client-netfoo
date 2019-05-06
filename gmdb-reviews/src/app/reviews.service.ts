import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from './review';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private http: HttpClient) { }

  getReviewsByMovieId(imdbId:string): Observable<Review[]>{
    // console.log("imdbId "+imdbId);
    // this.http.get<Review[]>(`http://localhost:8084/api/review?movieId=${imdbId}`).subscribe(value => console.log(value));
    return this.http.get<Review[]>(`http://localhost:8084/api/review?movieId=${imdbId}`);
  }

}
