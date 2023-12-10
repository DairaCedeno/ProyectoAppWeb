import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mobiliario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobiliario.component.html',
  styleUrl: './mobiliario.component.css'
})
export class MobiliarioComponent {

}

function guardarActivo(tipo: string): void {
  const facultad: string = (<HTMLInputElement>document.getElementById('facultad')).value;
  const tipoActivo: string = (<HTMLInputElement>document.getElementById('tipoActivo')).value;
  const marcaMobiliario: string = (<HTMLInputElement>document.getElementById('marcaMobiliario')).value;
  const modeloMobiliario: string = (<HTMLInputElement>document.getElementById('modeloMobiliario')).value;
  const materialMobiliario: string = (<HTMLInputElement>document.getElementById('materialMobiliario')).value;
  const valorMobiliario: string = (<HTMLInputElement>document.getElementById('valorMobiliario')).value;
  const estadoFisico: string = (<HTMLInputElement>document.getElementById('estadoFisico')).value;

  // Validación de campos obligatorios
  if (facultad && tipoActivo && marcaMobiliario && modeloMobiliario && materialMobiliario && valorMobiliario && estadoFisico) {

    // Mostrar en el listado
    const listado: HTMLElement | null = document.getElementById('listadoMobiliario');
    if (listado) {
      const nuevoItem: HTMLLIElement = document.createElement('li');
      nuevoItem.textContent = `${facultad} - ${tipoActivo} - ${marcaMobiliario} - ${modeloMobiliario} - ${materialMobiliario} - ${valorMobiliario} - ${estadoFisico}`;
      listado.appendChild(nuevoItem);
    }

    // Limpiar los campos después de agregar
    (<HTMLInputElement>document.getElementById('facultad')).value = '';
    (<HTMLInputElement>document.getElementById('tipoActivo')).value = '';
    (<HTMLInputElement>document.getElementById('marcaMobiliario')).value = '';
    (<HTMLInputElement>document.getElementById('modeloMobiliario')).value = '';
    (<HTMLInputElement>document.getElementById('materialMobiliario')).value = '';
    (<HTMLInputElement>document.getElementById('valorMobiliario')).value = '';
    (<HTMLInputElement>document.getElementById('estadoFisico')).value = '';
  } else {
    alert("Por favor, completa todos los campos.");
  }
}
