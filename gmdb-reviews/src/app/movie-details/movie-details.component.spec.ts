import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesService } from '../movies.service';
import { MovieDetailsComponent } from './movie-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import {ActivatedRoute} from '@angular/router';
import { Observable,of } from 'rxjs';

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;
  let service: MoviesService;
  let app;
  //let activatedRoute: ActivatedRouteStub;

  // const fakeActivatedRoute = {
  //   params:{id:'tt0848228'}
  //   //of (params: { id:  'tt0848228'})
  // } as ActivatedRoute;

  // class fakeActivatedRoute{
  //   params: Observable <Object>;
  //   constructor(){
  //     this.params = of({id:'tt0848228'})
  //   }
  // }

  let params = of({id:'tt0848228'});


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([{ path: 'projects/:projectId', component: MovieDetailsComponent }])],
      declarations: [ MovieDetailsComponent ],
      providers:[{provide: ActivatedRoute, useValue: params}]
      
  

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsComponent);
    app = fixture.debugElement.componentInstance;
    component = fixture.nativeElement;
    fixture.detectChanges();
    let movieData;
    // activatedRoute = fixture.debugElement.injector.get(ActivatedRoute);
    // activatedRoute.testParams = { id: 'tt0848228'};
    fixture.detectChanges();
      service.getMovieDetailById('tt0848228').subscribe(a => movieData = a);
  });

  it('should create', () => {
    expect(app).toBeTruthy();
  });
  xit('should display details', () => {
    let movieGenre=app.querySelectorAll('li');
    //activatedRoute = fixture.debugElement.injector.get(ActivatedRoute);

    expect(movieGenre).toContain('Action');
  });
  
});
