import { Component, OnInit } from '@angular/core';
import { MovieAdmin } from '../../interfaces/movi-admin';
import { ServiceService } from '../../services/service.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-deshboard',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatDividerModule, MatIconModule, NgFor, CommonModule],
  templateUrl: './deshboard.component.html',
  styleUrls: ['./deshboard.component.css'], // Corregido 'styleUrl' a 'styleUrls'
})
export class DeshboardComponent implements OnInit {
  movies: MovieAdmin[] = []; // Asegúrate de que es un array.

  constructor(private readonly service: ServiceService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service.getAllmovies().subscribe({
      next: (data: { data: MovieAdmin[] }) => {
        this.movies = data.data; // Accede a la propiedad 'data'.
      },
      error: (error) => {
        console.error('Error al obtener las películas:', error);
      },
    });
  };



  logout(){
    this.service.logout();
  }
}
