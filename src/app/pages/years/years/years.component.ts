import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {HttpService} from "../../../services/http.service";

@Component({
  selector: 'app-years',
  templateUrl: './years.component.html',
  styleUrls: ['./years.component.scss']
})
export class YearsComponent  implements OnInit{
  years$:Observable<string[]> | undefined;


  constructor(private http:HttpService) {
  }
  ngOnInit() {
    this.years$ = this.http.getYears()
  }
}
