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



    
  onLogin() {
    alert('En el login');
    if (this.username === 'Daira' && this.password === 'admin') {
      // Redireccionar a otra página
      this.router.navigate(['main']);
    } else {
      // Manejar el error de inicio de sesión
      alert('Credenciales incorrectas');
    }
  }

  handleLoginClick(event: Event) {

    
    event.preventDefault();
    console.log(this.username);
    console.log(this.password);
    
    if (this.username === 'Daira' && this.password === 'admin') {
      // Redireccionar a otra página
      this.router.navigate(['main']);
    } else {
      // Manejar el error de inicio de sesión
      alert('Credenciales incorrectas');
    }

  }

}

