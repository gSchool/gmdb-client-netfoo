import { TestBed } from '@angular/core/testing';

import { FavoritesListService } from './favorites-list.service';

let service;

describe('FavoritesListService', () => {
  beforeEach(() =>{ 
    TestBed.configureTestingModule({});
    service = TestBed.get(FavoritesListService);

});

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should create a new list for user with a provided name', () => {
    
    expect(service.createList("test")).toBeTruthy();
  });
  it('should append movieID to a specific list', () => {
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
