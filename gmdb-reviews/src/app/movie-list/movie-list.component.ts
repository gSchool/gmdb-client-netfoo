import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movies } from '../movies';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'movieList',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movieList: Movies[];
  query = '';
  wasClicked = false;

  constructor(private ms: MoviesService, private actRouter: ActivatedRoute) { 
    this.movieList = [];
  }

  onClick() {
    this.wasClicked= !this.wasClicked;
  }

  ngOnInit() {
    // this.ms.getAll().subscribe(movies => this.movieList = movies);
    this.ms.getRandomMovies().subscribe(movies => this.movieList = movies);
    this.update();
  }

  update(){
    if(this.actRouter.params){
      this.actRouter.params.subscribe(data => {
        try {
          this.query = data.query;
          if(this.query===''){
            this.ms.getAll().subscribe(movies => this.movieList = movies);
          }
          else{
            this.ms.getMovieByName(this.query).subscribe(movies => this.movieList = movies);
          }
        } catch (error) {
          //console.log(error);
        }
      });
    }
  }
}
