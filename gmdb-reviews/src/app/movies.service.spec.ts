import { TestBed } from '@angular/core/testing';

import { MoviesService } from './movies.service';
import  {Search} from '../data/movies.json';

describe('MoviesService', () => {
  let service: MoviesService;
  beforeEach(() =>{
     TestBed.configureTestingModule({})
  service = TestBed.get(MoviesService);
  });

  it('should be created', () => {
   
    expect(service).toBeTruthy();
  });
  xit('should return movie list ', () => {
    let  movieName = Search[0].Title;
    let movieList = service.getAll();
    expect(movieList.reduce((acc, cur)=>
  });


  xit('should retrun movie by name ', () => {
    const 
    expect(service).toBeTruthy();
  });
});
