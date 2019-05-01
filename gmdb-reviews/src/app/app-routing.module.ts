
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
//   { path:  '', pathMatch:  'full', redirectTo:  'list'},
  { path: 'searchResult/:value', component: MovieListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }