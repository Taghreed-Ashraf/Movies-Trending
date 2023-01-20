import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CarouselModule } from 'ngx-owl-carousel-o';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SearchComponent } from './search/search.component';
import { MovieComponent } from './movie/movie.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { PeopleComponent } from './people/people.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CutTitlePipe } from './cut-title.pipe';
import { SeemorePipe } from './seemore.pipe';
import { NumberPipe } from './number.pipe';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NotfoundComponent,
    SearchComponent,
    MovieComponent,
    TvShowsComponent,
    PeopleComponent,
    DetailsComponent,
    LoginComponent,
    RegisterComponent,
    CutTitlePipe,
    SeemorePipe,
    NumberPipe,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
