import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieCoverComponent } from './shared/movie-cover/movie-cover.component';
import {MoviesComponent} from "./pages/movies/movies.component";
import {MovieDetailsComponent} from "./pages/movies/movie-details/movie-details.component";
import {MoviesInCategoryComponent} from "./pages/categories/movies-in-category/movies-in-category.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {CategoriesComponent} from "./pages/categories/categories.component";
import {HttpClientModule} from "@angular/common/http";
import { YearsComponent } from './pages/years/years/years.component';
import {MovieInYearComponent} from "./pages/years/years/movie-in-year/movie-in-year.component";
import { HttpTestComponent } from './pages/http-test/http-test.component';
import {FormsModule} from "@angular/forms";
import { AddMovieComponent } from './pages/add-movie/add-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent,
    MoviesComponent,
    CategoriesComponent,
    PageNotFoundComponent,
    MoviesInCategoryComponent,
    MovieCoverComponent,
    YearsComponent,
    MovieInYearComponent,
    HttpTestComponent,
    AddMovieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
