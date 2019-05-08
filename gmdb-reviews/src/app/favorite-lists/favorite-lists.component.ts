import { Component, OnInit, Input } from '@angular/core';
import { ReviewsService } from '../reviews.service';
import { UserService } from '../user.service';
import { FavoritesListService } from '../favorites-list.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'favorite-lists',
  templateUrl: './favorite-lists.component.html',
  styleUrls: ['./favorite-lists.component.css']
})
export class FavoriteListsComponent implements OnInit {

@Input() 
movieId:string;

  userEmail: string;
  favoriteListNames: string[]=[];
  favoriteLists: Object={};
  isCreateListClicked: boolean = false;
  newListName: string;
  feedback: string = "";




  constructor(private userService: UserService, private favoriteService: FavoritesListService) { }

  ngOnInit() {
    this.userService.getEmail().subscribe(a => {
      this.userEmail = a;
      console.log("user received",a);
      this.favoriteService.getAllLists(this.userEmail).subscribe(b => {
        this.favoriteLists = b;
        console.log("favoriteList",this.favoriteLists);
        this.favoriteListNames = Object.keys(this.favoriteLists);
        console.log("favoriteListName",this.favoriteListNames);
      },
      err=>this.feedback="You must be logged in to access your lists");
    });

  }

  createList() {
    console.log('new list', this.newListName)
    if (!this.newListName || this.newListName.length === 0) this.feedback = "List name cannot be empty";
    else this.favoriteService.createList(this.newListName).subscribe(b => {
      console.log("this is b",b)
      this.favoriteLists = b;
      console.log("favoriteList", this.favoriteLists);
      this.favoriteListNames = Object.keys(this.favoriteLists);
      console.log("favoriteListName", this.favoriteListNames);
    },err => this.feedback = "Error saving new list")
  }
  addMovieToList(listName:string){
    this.favoriteService.addMovietoList(listName,this.movieId).subscribe()
  }

}
