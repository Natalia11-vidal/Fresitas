
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import Swal from 'sweetalert2';

import {
  LoginService,
  Credenciales,
  RespuestaLogin
} from '../../service/login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})

export class Login {

  form: FormGroup;
  ocultar = true;
  usuarioGuardado = '';

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService
  ) {

    this.form = this.fb.group({

      usuario: ['', [
        Validators.required,
        Validators.minLength(8)
      ]],

      contraseña: ['', [
        Validators.required,
        Validators.minLength(8)
      ]]

    });

    this.usuarioGuardado = this.obtenerUsuario();
  }

  iniciarSesion(): void {

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const credenciales: Credenciales = {
      usuario: this.form.get('usuario')?.value,
      contraseña: this.form.get('contraseña')?.value
    };

    this.loginService.login(credenciales).subscribe({

      next: (respuesta: RespuestaLogin) => {

        console.log(respuesta.autenticado);

        if (respuesta.autenticado) {

          localStorage.setItem(
            'usuario',
            credenciales.usuario
          );

          this.usuarioGuardado = this.obtenerUsuario();

          Swal.fire({
            icon: 'success',
            title: '¡Bienvenido a Fresitas!',
            text: respuesta.mensaje,
            confirmButtonText: 'Aceptar'
          });

        } else {

          Swal.fire({
            icon: 'error',
            title: 'Error de acceso',
            text: respuesta.mensaje,
            confirmButtonText: 'Aceptar'
          });

        }

      },

      error: (error) => {

        console.log(error);

        Swal.fire({
          icon: 'error',
          title: 'No se pudo iniciar sesión',
          text: error.error?.mensaje ||
            'Verifica tus credenciales o la conexión con el servidor',
          confirmButtonText: 'Aceptar'
        });

      }

    });

  }

  obtenerUsuario(): string {

    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('usuario') || '';
    }

    return '';

  }

}
