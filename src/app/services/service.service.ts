import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../interfaces/users';
import { Observable } from 'rxjs';
import { AuthResponse } from '../interfaces/auth-response';
import { environment } from '../../environments/environment';
import { MovieAdmin } from '../interfaces/movi-admin';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  login(credenciales: Users): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${environment.apiUrl}user`, credenciales);
  }
  
  setToken(token: string){
    localStorage.setItem("authToken", token);
  }

  logout(){
    localStorage.removeItem("authToken");
  }

  getAllmovies(): Observable<{ data: MovieAdmin[] }> {
    return this.http.get<{ data: MovieAdmin[] }>(`${environment.apiUrl}movies`);
  }

  getOne(id: string){
    return this.http.get<MovieAdmin[]>(`${environment.apiUrl}movies${id}`);
  }

  create(movie: MovieAdmin){
    return this.http.post<MovieAdmin>(`${environment.apiUrl}movies`, movie);
  }

  isLoggedIn(){
    return localStorage.getItem("authToken");
  }
}
