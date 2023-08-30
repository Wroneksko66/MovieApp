import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieInYearComponent } from './movie-in-year.component';

describe('MovieInYearComponent', () => {
  let component: MovieInYearComponent;
  let fixture: ComponentFixture<MovieInYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieInYearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieInYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
