import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable,of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FavoritesListService {

  movieListStorage: Map<number, string[]>;
  user: string;
  success: boolean;
  
listNameStorage : string[];


  constructor(private http: HttpClient) {

    this.movieListStorage = new Map();
  }
  

  getAllLists(user: string) {
  return  of(this.http.get(`http://localhost:8082/movie-list/getUsersLists?username=${user}`)
    .subscribe(
      res =>  {
        this.success=true;
        console.log(res);
       [].forEach.call(res,list=>{
          this.movieListStorage.set(list["id"],list["movieIds"]);
          this.listNameStorage[list["id"]] =list["name"]; 
       });
      },
      err =>{
         console.log('HTTP Error', err);
         this.success=false;
      },
      () => {
        if(this.success) return this.movieListStorage.entries();
        else return null;
      }
    ));
  }

  createList(listName: string) {

    let newList = {
      "name": listName,
      "username": this.user,
      "movieIds": []
    }

    let options = {
      headers: { "content-type": "application/json" }
    }

   return of(this.http.post("http://localhost:8082/movie-list/createMovieList", newList, options)
      .subscribe(
        res =>  {
          this.success=true;
          this.listNameStorage[res["id"]] = listName;
          this.movieListStorage.set(res["id"],[]);
        },
        err =>{
           console.log('HTTP Error', err);
           this.success=false;
        },
        () => this.success
      ));
  }


  addMovietoList(listName: string, movieId: string) {
    //get listId
    let listId = this.listNameStorage.indexOf(listName);
    //local memory
    let list = this.movieListStorage.get(listId);
    list.push(movieId)
    this.movieListStorage.set(listId, list);

    //API call
  return  of(this.http.put(`http://localhost:8082/movie-list/putMovie?movieListId=${listId}&movieId=${movieId}`,{headers:{"content-type":"application/json"}})
    .subscribe(
      res =>  this.success=true,
      err =>{
         console.log('HTTP Error', err);
         this.success=false;
      },
      () => this.success
    ));
      
  }
  removeMovieFromList(listName: string, movieId: string){
        //get listId
        let listId = this.listNameStorage.indexOf(listName);
        //local memory
    let list = this.movieListStorage.get(listId);
    list.splice(list.indexOf(movieId),1);
    this.movieListStorage.set(listId, list);

    //API call
  return  of(this.http.delete(`http://localhost:8082/movie-list/deleteMovie?movieListId=${listId}&movieId=${movieId}`,{headers:{"content-type":"application/json"}})
  .subscribe(
    res =>  this.success=true,
    err =>{
       console.log('HTTP Error', err);
       this.success=false;
    },
    () => this.success
  ));
    
  }
removeList(listName:string){
  //get listId
  let listId = this.listNameStorage.indexOf(listName);
  //local storage
  this.movieListStorage.delete(listId);
  this.listNameStorage.splice(listId,1);


    //API call
  return  of(this.http.delete(`http://localhost:8082/movie-list/deleteMovieList?movieListId=${listId}`,{headers:{"content-type":"application/json"}})
  .subscribe(
    res =>  this.success=true,
    err =>{
       console.log('HTTP Error', err);
       this.success=false;
    },
    () => this.success
  ));
}

}
