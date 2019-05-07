import { Injectable } from '@angular/core';
// import { Search as movieData } from '../data/movies.json';
import { Observable,of } from 'rxjs';
import { Movies } from './movies.js';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movieStorage:Movies[];
  
  constructor(private http: HttpClient) { }

  getAll():Observable<Movies[]>{
    return this.http.get<Movies[]>('http://localhost:8083/movies/api/search/%20');

  // this.movieStorage=movieData.map(data=>Object.assign(new Movies(),data));
  // if(!this.movieStorage[0]) return null; //no results found;
  // return of(this.movieStorage);
  }

  getMovieByName(movieName:string):Observable<Movies[]>{
    return this.http.get<Movies[]>('http://localhost:8083/movies/api/search/'+movieName);

    // if(!this.movieStorage) this.getAll();     //if movielist not loaded
    // let result;
    // result=this.movieStorage.filter(movie=>{
    //   let regex = new RegExp(`${movieName.toLowerCase()}`);
    //   if(movie.Title.toLowerCase().match(regex)) return movie;
    // });

    // if(!result[0]) return null; //no results found;
    // return of(result); 
  }

  getMovieDetailById(imdbId:string):Observable<Movies>{
    return this.http.get<Movies>('http://localhost:8083/movies/api/detail/' + imdbId);

    // if(!this.movieStorage) this.getAll();    //if movielist not loaded
    // let result;
    // result=this.movieStorage.reduce((target, cur)=>{
    //   if(target) return target;
    //   if(cur.imdbID===imdbId) return cur;
    // },null);

    // return of(result); 
  }

  getRandomMovies(): Observable<Movies[]>{
    this.getAll().subscribe(data => this.movieStorage = data.movies);
    console.log('this.movieStorage '+this.movieStorage )
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
