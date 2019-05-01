
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
//   { path:  '', pathMatch:  'full', redirectTo:  'list'},
  // { path: 'searchResult/:value', component: MovieListComponent},
  { path: 'movie/:value', component: MovieDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }