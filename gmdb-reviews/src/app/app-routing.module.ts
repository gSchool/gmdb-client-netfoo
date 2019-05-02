import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
 
  { path: 'searchResult/:query', component: MovieListComponent},
  {path: "details/:id", component: MovieDetailsComponent},
  {path: "signup", component: SignUpComponent},
  {path: "login", component: LoginComponent},
  { path: '**', component: MovieListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }