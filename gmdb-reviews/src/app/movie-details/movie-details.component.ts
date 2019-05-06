import { Component, OnInit, NgModule } from '@angular/core';
import { Movies } from '../movies';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../movies.service';
import { Location } from '@angular/common'; 
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'movieDetails',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movies;
  id: string;
  show:boolean = false;

  constructor(private activateRouter: ActivatedRoute, private movieService: MoviesService,private location:Location) { }

  ngOnInit() {
    if(this.activateRouter.params){
      this.activateRouter.params.subscribe(({ id }) => this.id = id);
      this.movieService.getMovieDetailById(this.id).subscribe(data => this.movie = data);
    }
  }

  goBack(){
    this.location.back();
  }

  toggle() {
    this.show = !this.show;
  }


}
