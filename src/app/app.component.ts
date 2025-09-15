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
    public authService: AuthService, // Se usa en el HTML directamente
    private router: Router
  ) {}

  ngOnInit(): void {
    // Inicialización si la necesitas
  }

  logout(): void {
    this.authService.logout(); // elimina el token
    this.router.navigate(['/']); // lo mando al home público
  }
}
