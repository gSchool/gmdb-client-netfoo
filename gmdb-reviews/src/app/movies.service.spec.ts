import { TestBed } from '@angular/core/testing';
import { MoviesService } from './movies.service';
import  {Search as movieData}  from '../data/movies.json';

describe('MoviesService', () => {
  let service: MoviesService;
  beforeEach(() =>{
     TestBed.configureTestingModule({})
  service = TestBed.get(MoviesService);

  });

  it('should be created', () => {
   
    expect(service).toBeTruthy();
  });

  it('should return movie list ', () => {
    let movieName = movieData[0].Title;
    let movieList;
    service.getAll().subscribe(a => movieList = a);
    expect(movieList[0].Title).toEqual(movieName);
  });


  it('should return movie by name ', () => {
    let  movieName = movieData[0].Title;
    let movieList;
    service.getMovieByName('The').subscribe(a => movieList = a);
    expect(movieList[0].Title).toEqual(movieName);
  });

  it('should return movieDetails by id ', () => {
    let  expected = movieData[0].imdbID;
   
    let actual;
    service.getMovieDetailById('tt0848228').subscribe(a => actual = a);
    
    expect(actual.imdbID).toEqual(expected);
  });

});
