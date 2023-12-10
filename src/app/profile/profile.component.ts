import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}


 /* document.getElementById('changePasswordBtn')?.addEventListener('click', function() {
    var oldPassword = prompt("Ingrese la contraseña actual:");
    var newPassword = prompt("Ingrese la nueva contraseña:");

    if (oldPassword && newPassword) {
      alert('Contraseña cambiada con éxito');
    } else {
      alert('Error al cambiar la contraseña. Por favor, verifique la contraseña actual.');
    }
  });

  document.getElementById('editProfileBtn')?.addEventListener('click', function() {
    var newName = prompt("Ingrese su nuevo nombre:");

    if (newName) {
      alert('Perfil editado con éxito');
    } else {
      alert('Error al editar el perfil. Por favor, inténtelo de nuevo.');
    }
  });

  document.getElementById('logoutBtn')?.addEventListener('click', function() {
    window.location.href = '../login/login.component.html';
  });
*/
