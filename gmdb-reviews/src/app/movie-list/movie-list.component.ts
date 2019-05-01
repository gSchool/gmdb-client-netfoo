import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movies } from '../movies';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'movieList',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, OnChanges {
  movieList: Movies[];
  query = '';

  constructor(private ms: MoviesService, private actRouter: ActivatedRoute) { 
    this.movieList = [];
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['query']) {
      console.log('changes '+changes['query']);
      this.query = this.query;
    }
  }

  ngOnInit() {
    // this.update();
  }

  // update(){
  //   console.log('this.actRouter.snapshot.params ' + this.actRouter.snapshot.params['query'])
  //   this.actRouter.params.subscribe(data => this.query = data.query);

  //   console.log('this.query ' + this.query)

  //   if(!this.query){
  //     console.log('This query is empty')
  //     this.ms.getAll().subscribe(movies => this.movieList = movies);
  //   }
  //   else{
  //     this.ms.getMovieByName(this.query).subscribe(movies => this.movieList = movies);
  //     console.log('When query is not empty we get: ' + this.movieList);
  //   }
  // }

}
