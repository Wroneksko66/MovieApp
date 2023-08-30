import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../../../services/http.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Observable} from "rxjs";
import {switchMap} from "rxjs/operators";
import {Movie} from "../../../../models/movie";

@Component({
  selector: 'app-movie-in-year',
  templateUrl: './movie-in-year.component.html',
  styleUrls: ['./movie-in-year.component.scss']
})
export class MovieInYearComponent implements OnInit{
 movies$:Observable<Movie[]> | undefined;
  constructor(private http:HttpService,
              private route:ActivatedRoute) {
  }
  ngOnInit() {
    this.movies$ = this.route.paramMap.pipe(
      switchMap((params:ParamMap) => this.http.getMoviesFromYear(params.get('year')))
    )
    console.log(this.movies$)
  }
}
