import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      xcorreoInstitucional: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      // El campo 'corte' no es necesario para el login, pero lo dejamos si quieres
      // gestionar esta información en el frontend.
     //corte: ['']
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      // Agrega esta línea para ver los valores en la consola
      console.log('Valores del formulario:', this.loginForm.value);

      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          console.log('Login exitoso', response);
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.error('Error en el login:', error);
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}