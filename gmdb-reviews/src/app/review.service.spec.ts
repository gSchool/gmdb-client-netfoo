import { TestBed } from '@angular/core/testing';

import { ReviewService } from './review.service';
import { Review } from './review';

describe('ReviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  let service: ReviewService;

  beforeEach(()=>{
    service = TestBed.get(ReviewService);
  })

  it('should be created', () => {
    const service: ReviewService = TestBed.get(ReviewService);
    expect(service).toBeTruthy();
  });

  it('should add review object to list of reviews', () => {
    let expected = new Review;
    expected.id="1",
    expected.userId="1",
    expected.movieId="tt0848228",
    expected.title="Good movie",
    expected.description="terrible movie"

    service.addReview(expected);

    expect(service.reviews.includes(expected)).toBeTruthy();
    expect(service.reviews.length).toEqual(1);
    expect(service.reviews[0] instanceof Review).toBeTruthy();
  })

  it('should get reviews for specific movie id', () => {
    let expected = new Review;
    expected.id="1",
    expected.userId="1",
    expected.movieId="tt0848228",
    expected.title="Good movie",
    expected.description="terrible movie"
    service.addReview(expected);

    let actual;
    service.getReviews('tt0848228').subscribe(data => actual = data);
    let actual2;
    service.getReviews('blad').subscribe(data => actual2 = data);

    expect(actual).toEqual([expected]);
    expect(actual2).toEqual([]);
  })
});
