import { Component, OnInit} from '@angular/core';
import { MovieAdmin } from '../interfaces/movi-admin';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-user-movies',
  templateUrl: './user-movies.component.html',
  styleUrls: ['./user-movies.component.css'],
})
export class UserMoviesComponent implements OnInit {
  movies: MovieAdmin[] = [];

  constructor(private apiService: ServiceService) {}

  ngOnInit(): void {
    // this.apiService.getOne().subscribe((movies) => {
    //   this.movies = movies;
    // });
  }
}

