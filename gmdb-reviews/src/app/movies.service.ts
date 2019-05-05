import { Injectable } from '@angular/core';
import { Search as movieData } from '../data/movies.json';
import { Observable,of } from 'rxjs';
import { Movies } from './movies.js';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movieStorage:Movies[];
  
  constructor() { 
    //TODO: inject [private httpClient:HttpClient]
  }

  getAll():Observable<Movies[]>{
  this.movieStorage=movieData.map(data=>Object.assign(new Movies(),data));

  if(!this.movieStorage[0]) return null; //no results found;
  return of(this.movieStorage);
  }

  getMovieByName(movieName:string):Observable<Movies[]>{
    if(!this.movieStorage) this.getAll();     //if movielist not loaded

    let result;
    result=this.movieStorage.filter(movie=>{
      let regex = new RegExp(`${movieName.toLowerCase()}`);
      if(movie.Title.toLowerCase().match(regex)) return movie;
    });

    if(!result[0]) return null; //no results found;
    return of(result); 
  }

  getMovieDetailById(imdbId:string):Observable<Movies>{
    if(!this.movieStorage) this.getAll();    //if movielist not loaded

    let result;
    result=this.movieStorage.reduce((target, cur)=>{
      if(target) return target;
      if(cur.imdbID===imdbId) return cur;
    },null);

    return of(result); 
  }

  getRandomMovies(): Observable<Movies[]>{
    this.getAll().subscribe(data => this.movieStorage = data);
    let randomMoviesList = [];
    while (randomMoviesList.length != 100) {
      let randomIndex = Math.floor(Math.random() * (+this.movieStorage.length - +0) + +0);
      if (!randomMoviesList.includes(this.movieStorage[randomIndex])) {
        randomMoviesList.push(this.movieStorage[randomIndex]);
      }
    }
    return of(randomMoviesList);
  }

}
