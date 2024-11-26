import { Component, OnInit } from '@angular/core';
import { MovieAdmin } from '../../interfaces/movi-admin';
import { ServiceService } from '../../services/service.service';
import {MatButtonModule} from '@angular/material/button'; 
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-deshboard',
  standalone: true,
  imports:[RouterLink, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './deshboard.component.html',
  styleUrl: './deshboard.component.css'
})
export class DeshboardComponent implements OnInit{

  movies: MovieAdmin[] = [];
  constructor (private readonly movieServices: ServiceService){}
    
  ngOnInit(): void {
      this.getAll()
  }

  getAll(){
    this.movieServices.getAllmovies().subscribe({
      next: (data: MovieAdmin[]) =>{
        this.movies = data;
        console.log(data);
      }
    })
  }
}
