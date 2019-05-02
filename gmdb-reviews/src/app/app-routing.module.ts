
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
//   { path:  '', pathMatch:  'full', redirectTo:  'list'},
  { path: '', component: MovieListComponent},
  { path: 'searchResult/:query', component: MovieListComponent},
  {path: "details/:id", component: MovieDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }