import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  private apiUrl = 'http://localhost:8080/sis/auth/login'; // O la URL de tu backend
  private tokenKey = 'jwt_token';

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, credentials).pipe(
      tap(response => {
        // Al recibir la respuesta del backend, guarda el token en el almacenamiento local
        if (response && response.token) {
          localStorage.setItem(this.tokenKey, response.token);
        }
      })
    );
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    return !!token; // Devuelve true si el token existe
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }
}