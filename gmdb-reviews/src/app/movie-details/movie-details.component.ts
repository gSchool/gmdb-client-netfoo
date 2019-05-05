import { Component, OnInit } from '@angular/core';
import { Movies } from '../movies';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../movies.service';
import { Location } from '@angular/common'; 


@Component({
  selector: 'movieDetails',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movies;
  id: string;


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
}
