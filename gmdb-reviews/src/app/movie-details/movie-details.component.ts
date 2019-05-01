import { Component, OnInit } from '@angular/core';
import { Movies } from '../movies';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie: Movies;
  id: string;

  constructor(private router: ActivatedRoute, private movieService: MoviesService) {

  }

  ngOnInit() {
   
    this.router.params.subscribe(({ id }) => this.id = id);
    console.log('id:',this.id);
    this.movieService.getMovieDetailById(this.id).subscribe(data =>  this.movie =data);
    console.log('id:',this.id);
    console.log('our movie:',this.movie);
  }

}
