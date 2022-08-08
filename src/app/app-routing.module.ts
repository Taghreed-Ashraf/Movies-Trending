import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';

const routes: Routes = [
  {path: "" , redirectTo :'home' , pathMatch: 'full'},
  {path:'home' , canActivate:[AuthGuard] , component:HomeComponent , title:'Home'},
  {path : 'movies' , canActivate:[AuthGuard] , component:MovieComponent , title : 'Movies'},
  {path : 'tv' , canActivate:[AuthGuard] , component:TvShowsComponent , title : 'Tv Shows'},
  {path : 'people' , canActivate:[AuthGuard] , component:PeopleComponent , title: 'People' },
  {path : 'search' , canActivate:[AuthGuard] , component:SearchComponent , title: 'Search' },
  {path : 'details/:id/:mediatype' , component:DetailsComponent , title: 'Details' },

  {path : 'login' , component : LoginComponent , title : 'Login'},
  {path : 'register' , component : RegisterComponent , title : 'Register'},
  {path : '**' , component : NotfoundComponent , title:'Not Found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
