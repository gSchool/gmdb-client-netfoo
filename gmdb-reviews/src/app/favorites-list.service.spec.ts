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
            id: 6,
            movieId: "tt0848228",
            email: "user@hello",
            description: "Very Good :)",
            title: "Waste your time!"
        },
        {
          id: 7,
          movieId: "tt0848228",
          email: "dfbdbfd@hello",
          description: "Awesome",
          title: "Just go!"
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
  xit('should create a new list for user with a provided name', () => {
    let favoriteList=[];
    service.createList("test").subscribe(a => favoriteList = a);
    let expected = [
      {
        id: 6,
        movieId: "tt0848228",
        email: "user@hello",
        description: "Very Good :)",
        title: "Waste your time!"
      },
      {
      id: 7,
      movieId: "tt0848228",
      email: "dfbdbfd@hello",
      description: "Awesome",
      title: "Just go!"
      } 
    ]
    
    expect(service.createList("test")).toEqual(expected);
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
