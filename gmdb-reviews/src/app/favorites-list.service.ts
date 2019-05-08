import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FavoritesListService {

  movieListStorage = {};   // {movieListId: [movieId#1,movieId#2]}
  user: string;
  success: boolean;
  listNameStorage: string[] = [];    //array to store the name of the lists    listNameStorage[movieListId] = listName


  constructor(private http: HttpClient) {

  }


  getAllLists(user: string): Observable<object> {
    return this.http.get(`http://localhost:8082/movie-list/getUsersLists?username=${user}`)
      .pipe(
        map(
          res => {
            //store in memory
            this.success = true;
            [].forEach.call(res, list => {
              this.movieListStorage[list["id"]] = list["movieIds"];
              this.listNameStorage[list["id"]] = list["name"];
            });
            let output = {};
            this.listNameStorage.forEach((listName, i) => output[listName] = this.movieListStorage[i]);
            console.log("result of output", output)
           return output;

          }, catchError(err => {
            console.log('HTTP Error', err);
            return null;
          })
        )
      )
  }


  createList(listName: string): Observable<object> {

    let newList = {
      "name": listName,
      "username": this.user,
      "movieIds": []
    }

    let options = {
      headers: { "content-type": "application/json" }
    }

  return this.http.post("http://localhost:8082/movie-list/createMovieList", newList, options)
      .pipe(
        map(
          res => {
            console.log("res:",res)
            this.success = true;
            this.listNameStorage[res["id"]] = listName;
            this.movieListStorage[res["id"]] = [];
            console.log("result 1 in createlist", this.movieListStorage);
            console.log("result 2 in createlist", this.listNameStorage);
            let output = {};
            this.listNameStorage.forEach((listName, i) => output[listName] = this.movieListStorage[i]);
            console.log("result of output", output)
           return output;
          },
          catchError(err => {
            console.log('HTTP Error', err);
           return null;
          })
        )
      )
  }


  addMovietoList(listName: string, movieId: string):Observable<object> {
    //get listId
    let listId = this.listNameStorage.indexOf(listName);

    //local memory
    // let list = this.movieListStorage[listId];
    // list.push(movieId)
    // this.movieListStorage[listId] = list;

    //API call
    return this.http.put(`http://localhost:8082/movie-list/putMovie?movieListId=${listId}&movieId=${movieId}`, { headers: { "content-type": "application/json" } })
    .pipe(
      tap(
        res => {
          console.log("res:",res)
          this.success = true;
          this.listNameStorage[res["id"]] = listName;
          this.movieListStorage[res["id"]] = [];
          console.log("result 1 in createlist", this.movieListStorage);
          console.log("result 2 in createlist", this.listNameStorage);
          let output = {};
          this.listNameStorage.forEach((listName, i) => output[listName] = this.movieListStorage[i]);
          console.log("result of output", output)
          return output;
        },
        catchError(err => {
          console.log('HTTP Error', err);
          return null;
        })
      )
    )

  }
  removeMovieFromList(listName: string, movieId: string):Observable<object> {
    //get listId
    let listId = this.listNameStorage.indexOf(listName);

    //local memory
    let list = this.movieListStorage[listId];
    list.splice(list.indexOf(movieId), 1);
    this.movieListStorage[listId] = list;

    //API call
    return this.http.delete(`http://localhost:8082/movie-list/deleteMovie?movieListId=${listId}&movieId=${movieId}`, { headers: { "content-type": "application/json" } })
    .pipe(
      tap(
        res => {
          console.log("res:",res)
          this.success = true;
          this.listNameStorage[res["id"]] = listName;
          this.movieListStorage[res["id"]] = [];
          console.log("result 1 in createlist", this.movieListStorage);
          console.log("result 2 in createlist", this.listNameStorage);
          let output = {};
          this.listNameStorage.forEach((listName, i) => output[listName] = this.movieListStorage[i]);
          console.log("result of output", output)
          return of(output);
        },
        catchError(err => {
          console.log('HTTP Error', err);
          return of(null);
        })
      )
    )
      }
  removeList(listName: string):Observable<object> {
    //get listId
    let listId = this.listNameStorage.indexOf(listName);

    //local storage
    delete this.movieListStorage[listId];
    this.listNameStorage.splice(listId, 1);

    //API call
  return this.http.delete(`http://localhost:8082/movie-list/deleteMovieList?movieListId=${listId}`, { headers: { "content-type": "application/json" } })
   .pipe(
    tap(
      res => {
        console.log("res:",res)
        this.success = true;
        this.listNameStorage[res["id"]] = listName;
        this.movieListStorage[res["id"]] = [];
        console.log("result 1 in createlist", this.movieListStorage);
        console.log("result 2 in createlist", this.listNameStorage);
        let output = {};
        this.listNameStorage.forEach((listName, i) => output[listName] = this.movieListStorage[i]);
        console.log("result of output", output)
        return of(output);
      },
      catchError(err => {
        console.log('HTTP Error', err);
        return of(null);
      })
    )
  )
    }

}
