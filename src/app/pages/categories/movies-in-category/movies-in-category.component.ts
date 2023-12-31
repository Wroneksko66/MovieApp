import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HttpService } from '../../../services/http.service';
import { Movie } from '../../../models/movie';

@Component({
  selector: 'app-movies-in-category',
  templateUrl: './movies-in-category.component.html',
  styleUrls: ['./movies-in-category.component.css'],
})
export class MoviesInCategoryComponent implements OnInit {
  movies$: Observable<Movie[]> | undefined;

  constructor(private http:HttpService,
              private route: ActivatedRoute) {}


  ngOnInit() {
    this.movies$ = this.route.paramMap.pipe(
      switchMap((params:ParamMap) => {
        console.log(params)
        return this.http.getMoviesFromCategory(params.get('category'))
      })
    )
  }
}
