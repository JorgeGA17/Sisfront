// app.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Asegúrate de importar Router
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Mi App';

  constructor(
    public authService: AuthService,
    private router: Router // Asegúrate de que el Router esté inyectado
  ) {}

  ngOnInit(): void {
    // Si tienes alguna lógica de inicialización, va aquí.
  }

  logout(): void {
    this.authService.logout(); // Esto elimina el token del localStorage.
    this.router.navigate(['/login']); // Esto redirige al usuario.
  }
}
  
