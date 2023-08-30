import {Component} from '@angular/core';
import {HttpMovieService} from "../../services/http-movie.service";
import {Movie} from "../../models/movie";

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent {
  id: string | undefined;
  constructor(private http: HttpMovieService) {
  }

  get() {
    this.http.getMovies().subscribe();
  }

  post() {
    const movie:Movie = {
      title: 'Wiedźmi',
      year: '1999',
      category: 'Fantazy',
      director: 'string',
      plot: 'string',
      poster: 'string',
      country: 'string',
      imdbRating: 'string'
    }
    this.http.postMovie(movie).subscribe()
  }

  patch(){
    const movie:Partial<Movie> = {
      id:'6',
      title: 'Interstellar'
    }
    this.http.patchMovie(movie).subscribe()
  }

  delete(id:string | undefined){
    this.id = id;
    if(!id){
      return console.log("nic nie usunięto")
    }
    this.http.deleteMovie(this.id).subscribe()
  }
}

