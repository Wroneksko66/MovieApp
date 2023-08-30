import {Component, OnInit} from '@angular/core';
import {Movie} from "../../models/movie";
import {NgForm} from "@angular/forms";
import {HttpService} from "../../services/http.service";
import {HttpMovieService} from "../../services/http-movie.service";

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent  implements OnInit{
  model: Partial<Movie> = {};
  categories:string[] = [];
  years:string[] = [];


constructor(private http:HttpService, private  httpMoviesService: HttpMovieService) {
}
  ngOnInit(){
    this.http.getCategories().subscribe( categories => this.categories = categories)
    this.http.getYears().subscribe(years => this.years = years)

  }

  send(){
  this.httpMoviesService.postMovie(this.model as Movie).subscribe(
    result => console.log(result),
    error => console.error(error)
  )
  }
}
