import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';
import { MoviesService } from '../movies.service';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [MoviesService] 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should have a search form', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('form')).toBeDefined();
  });

  xit('should require query to submit form', () => {
    const searchForm = component.searchForm.controls;
    expect(searchForm.query).toBeTruthy();
  });

  xit('should validate form', () => {
    const searchForm = component.searchForm;
    expect(searchForm.valid).toBeFalsy();
  });

  xit('should return search results', () => {
    // const obj = [{'name':'Mister KissKiss', 'age': 3, 'color': 'brown'}];
    // component.form.controls.query.setValue('Mister KissKiss');
    // component.result = obj;
    // expect(component.getResult()).toEqual(obj);
  });

  xit('should show message if no results found', () => {
    // expect(component.getResult()).toEqual('No result have been found');
  });

});
