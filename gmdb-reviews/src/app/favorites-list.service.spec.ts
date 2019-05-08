import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesListService } from './favorites-list.service';
import { of } from 'rxjs';import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';



let service;



describe('FavoritesListService', () => {

  class fakeHttpClient{
    get(){
      return of(
        [
          {
            movieListId: 1,
            name: "test",
            username: "test@test.com",
            movieList: ["movieId#1","movieId#2"]
          },
          {
            movieListId: 2,
            name: "test2",
            username: "test@test.com",
            movieList: []
          } 
        ]    
      )
    }
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule, FormsModule],
      providers: [
        {provide: HttpClient,  useValue: new fakeHttpClient}, 
        FavoritesListService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() =>{ 
    TestBed.configureTestingModule({});
    service = TestBed.get(FavoritesListService);

});

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrievve lost of user favorites', () => {
    let actual={};
    service.getAllLists("test").subscribe(a => actual = a);
    
    let expected = 
    {
      "test": ["movieId#1","movieId#2"],
      "test2": []
    };

    expect(actual).toEqual(expected);
  });

  xit('should append movieID to a specific list', () => {
    service.createList("test")
     service.addMovie("test","tt0848228");
     let actual = service.getList("test");
    let expected = ["tt0848228"];
    expect(actual).toEqual(expected);
  });
  xit('should retrive an entire list', () => {
    service.createList("test")
    service.getList("test").subscribe();

    expect(this.service).toBeTruthy();
  });

  xit('should remove a list', () => {
    expect(this.service).toBeTruthy();
  });

  xit('should remove a single movie item', () => {
    expect(this.service).toBeTruthy();
  });

  
});
