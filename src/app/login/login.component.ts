import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit(): void {
    // Aquí deberías verificar las credenciales ingresadas
    // y autenticar al usuario. Por ahora, simplemente redireccionaremos al dashboard.
    if (this.username && this.password) {
      // Realiza la autenticación aquí
      // Si la autenticación es exitosa, redirige al dashboard
      this.router.navigate(['/dashboard']);
    } else {
      // Puedes manejar la lógica para mostrar un mensaje de error si es necesario
      console.error('Por favor, ingresa un nombre de usuario y una contraseña.');
    }
  }
}
