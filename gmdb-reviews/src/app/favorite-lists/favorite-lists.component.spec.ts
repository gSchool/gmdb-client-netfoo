import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteListsComponent } from './favorite-lists.component';

describe('FavoriteListsComponent', () => {
  let component: FavoriteListsComponent;
  let fixture: ComponentFixture<FavoriteListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
