import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Movie} from "../models/movie";

@Injectable({
  providedIn: 'root'
})
export class HttpMovieService {
  private url = 'http://localhost:3000/movies'

  constructor(private http: HttpClient) {
  }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url).pipe(tap(console.log));
  }

  postMovie(movie: Movie) {
    return this.http.post(this.url, movie).pipe(tap(console.log))
  }

  patchMovie(movie: Partial<Movie>) {
    return this.http.patch(this.url + "/" + movie.id, movie).pipe(tap(console.log))
  }

  deleteMovie(id: string | undefined): Observable<{}> {
    return this.http.delete<{}>(this.url + '/' + id).pipe(tap(console.log))
  }
}
