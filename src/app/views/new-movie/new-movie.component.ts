import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ServiceService } from '../../services/service.service';
import { MovieAdmin } from '../../interfaces/movi-admin';

@Component({
  selector: 'app-new-movie',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule],
  templateUrl: './new-movie.component.html',
  styleUrl: './new-movie.component.css'
})
export class NewMovieComponent {
  constructor (private fb: FormBuilder, private authService: ServiceService){
    this.authForm = this.fb.group({
      titulo: ['',Validators.required],
      genero: ['',Validators.required],
      anoLanza: ['',Validators.required],
      director: ['',Validators.required],
      actores: ['',Validators.required],
      duracion: ['',Validators.required],
      precioAl: ['',Validators.required],
      precioCom: ['',Validators.required],
      // imagen: ['',Validators.required],
      rating: ['',Validators.required],
    })
  }
  
  authForm!: FormGroup;
  selectedFile!: File;
  movieAdmin: MovieAdmin[] = [];

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0]; // Guarda el archivo seleccionado
      console.log('Archivo seleccionado:', this.selectedFile.name);
    }
  }
  
  

  create(): void {
    if (this.authForm.valid) {
      const movieData: MovieAdmin = this.authForm.value; // Obtener valores del formulario.

      this.authService.create(movieData).subscribe({
        next: (data: MovieAdmin) => {
          console.log('Película creada:', data);
          this.movieAdmin.push(data); // Agregar nueva película al array.
          this.authForm.reset(); // Reiniciar el formulario.
        },
        error: (err) => {
          console.error('Error al crear la película:', err);
        },
      });
    } else {
      console.error('Formulario no válido');
    }
  }
}
