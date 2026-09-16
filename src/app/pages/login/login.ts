import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  usuario = '';
  senha = '';
  loginErro = false;

  constructor(private authService: AuthService) {}

  fazerLogin(): void {
    const sucesso = this.authService.login(this.usuario, this.senha);
    if (!sucesso) {
      this.loginErro = true;
    }
  }
}