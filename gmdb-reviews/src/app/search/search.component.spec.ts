    
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ]
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

  it('should have a search form', () => {
    const compiled = fixture.nativeElement;
    // expect(compiled.querySelector('form')).toBeDefined();
    expect(compiled.querySelector('form')).toBeTruthy();
  });

  it('should require query to submit form', () => {
    const searchForm = component.searchForm.controls;
    searchForm.query.setValue('Avengers');
    expect(searchForm.query.value).toEqual('Avengers');
  });

  it('should validate form to be false', () => {
    const searchForm = component.searchForm;
    expect(searchForm.valid).toBeFalsy();
  });

  it('should validate form to be true', () => {
    const searchForm = component.searchForm;
    searchForm.controls.query.setValue('Avengers')
    expect(searchForm.valid).toBeTruthy();
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
