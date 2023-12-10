import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transporte',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transporte.component.html',
  styleUrl: './transporte.component.css'
})
export class TransporteComponent {

}


function guardarActivo(tipo: string): void {
  const facultad: string = (<HTMLInputElement>document.getElementById('facultad')).value;
  const tipoActivo: string = (<HTMLInputElement>document.getElementById('tipoActivo')).value;
  const marcaTransporte: string = (<HTMLInputElement>document.getElementById('marcaTransporte')).value;
  const modeloTransporte: string = (<HTMLInputElement>document.getElementById('modeloTransporte')).value;
  const placaTransporte: string = (<HTMLInputElement>document.getElementById('placaTransporte')).value;
  const valoracion: string = (<HTMLInputElement>document.getElementById('valoracion')).value;

  const listado: HTMLElement | null = document.getElementById('listadoTransporte');

  if (facultad && tipoActivo && marcaTransporte && modeloTransporte && placaTransporte && valoracion && listado) {
    const nuevoItem: HTMLLIElement = document.createElement('li');
    nuevoItem.textContent = `${facultad} - ${tipoActivo} - ${marcaTransporte} - ${modeloTransporte} - ${placaTransporte} - ${valoracion}`;
    listado.appendChild(nuevoItem);

    // Limpiar los campos después de enviar
    (<HTMLInputElement>document.getElementById('facultad')).value = '';
    (<HTMLInputElement>document.getElementById('tipoActivo')).value = '';
    (<HTMLInputElement>document.getElementById('marcaTransporte')).value = '';
    (<HTMLInputElement>document.getElementById('modeloTransporte')).value = '';
    (<HTMLInputElement>document.getElementById('placaTransporte')).value = '';
    (<HTMLInputElement>document.getElementById('valoracion')).value = '';
  } else {
    alert('Por favor, completa todos los campos o verifica que el elemento exista.');
  }
}

