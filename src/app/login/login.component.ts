import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import Swal from 'sweetalert2';

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
    });
  }

onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Valores del formulario:', this.loginForm.value);

      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          console.log('Login exitoso', response);
          Swal.fire({
            icon: 'success',
            title: '¡Acceso exitoso!',
            text: 'Serás redirigido en breve.'
          });
          this.router.navigate(['/home']);
        },
        error: (error: HttpErrorResponse) => {
          console.error('Error en el login:', error);

          // Lógica de SweetAlert2 para mostrar el error
          let errorMessage = 'Ha ocurrido un error inesperado.';

          if (error.status === 401 || error.status === 403) {
            errorMessage = 'Correo o contraseña incorrectos.';
          } else if (error.status === 400) {
            errorMessage = 'Datos de solicitud incorrectos.';
          }

          Swal.fire({
            icon: 'error',
            title: 'Error de autenticación',
            text: errorMessage
          });
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}