import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../interfaces/users';
import { Observable } from 'rxjs';
import { AuthResponse } from '../interfaces/auth-response';
import { environment } from '../../environments/environment';

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
}
