import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MoviesService } from './movies.service';
import { Movies } from './movies';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Movies';
  movieList: Movies[];
  searchForm: FormGroup;

  constructor(private router: Router, private fb:FormBuilder, private ms: MoviesService, private userService:UserService) { }

  ngOnInit() {
    this.ms.getAll().subscribe(movies => this.movieList = movies);
    
    this.searchForm = this.fb.group({
      query: ['', Validators.required]
    });
  }

  onEnter() { 
    // console.log(this.searchForm.controls.query.value)
    this.router.navigate([`/searchResult/${this.searchForm.controls.query.value}`])
    if(this.searchForm.controls.query.value === ''){
      // console.log('This query is empty')
      this.ms.getAll().subscribe(movies => this.movieList = movies);
    }
    else{
      this.ms.getMovieByName(this.searchForm.controls.query.value).subscribe(movies => this.movieList = movies);
      // console.log('When query is not empty we get: ' + this.movieList);
    }
  }
  verifyAuth(){
    let verification;
    this.userService.isAuthenticated().subscribe(a=>verification=a);
    return verification;
  }
  logOut(){
    this.userService.logout();
  }
  getUserEmail(){
    let email;
    this.userService.getEmail().subscribe(a=>email=a);
    return email;
  }
}
