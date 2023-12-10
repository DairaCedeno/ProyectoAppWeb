import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tecnologia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tecnologia.component.html',
  styleUrl: './tecnologia.component.css'
})
export class TecnologiaComponent {

}


// Definir una interfaz para representar un activo
interface Activo {
  facultad: string;
  tipoActivo: string;
  marca: string;
  modelo: string;
  numeroSerie: string;
  valorAproximado: string;
  estadoFisico: string;
  observacion: string;
}

// Función para obtener el valor de un input por ID
function getInputValue(id: string): string {
  const element = document.getElementById(id);
  return element instanceof HTMLInputElement ? element.value : '';
}

// Función para limpiar los valores de varios inputs por ID
function clearInputValues(ids: string[]): void {
  ids.forEach(id => {
    const element = document.getElementById(id);
    if (element instanceof HTMLInputElement) {
      element.value = '';
    }
  });
}

// Función para guardar un activo
function guardarActivo(): void {
  const activo: Activo = {
    facultad: getInputValue('facultad'),
    tipoActivo: getInputValue('tipoActivo'),
    marca: getInputValue('marca'),
    modelo: getInputValue('modelo'),
    numeroSerie: getInputValue('numeroSerie'),
    valorAproximado: getInputValue('valorAproximado'),
    estadoFisico: getInputValue('estadoFisico'),
    observacion: getInputValue('observacion'),
  };

  // Validación de campos obligatorios
  if (Object.values(activo).every(value => value)) {
    // Si todos los campos están llenos, procede a guardar
  
    // Agregar a la lista
    const listado = document.getElementById('listadoTecnologicosUl');
    if (listado) {
      const nuevoItem = document.createElement('li');
      nuevoItem.textContent = Object.values(activo).join(' - ');
      listado.appendChild(nuevoItem);
    }

    // Agregar a la tabla
    const tabla = document.getElementById('tablaTecnologicos');
    if (tabla) {
      const tbody = tabla.getElementsByTagName('tbody')[0];
      if (tbody) {
        const newRow = tbody.insertRow(tbody.rows.length);

        for (let i = 0; i < 8; i++) {
          const cell = newRow.insertCell(i);
          cell.innerHTML = Object.values(activo)[i];
        }

        const cellAcciones = newRow.insertCell(8);
        cellAcciones.innerHTML = '<button onclick="editarActivo(this)">Editar</button> <button onclick="eliminarActivo(this)">Eliminar</button>';
      }
    }

    // Limpiar los campos después de agregar
    clearInputValues(['facultad', 'tipoActivo', 'marca', 'modelo', 'numeroSerie', 'valorAproximado', 'estadoFisico', 'observacion']);
  } else {
    alert('Por favor, completa todos los campos.');
  }
}

// Función para editar un activo (a implementar)
function editarActivo(button: HTMLButtonElement): void {
  // Lógica para editar un activo
  console.log('Editar activo');
}

// Función para eliminar un activo (a implementar)
function eliminarActivo(button: HTMLButtonElement): void {
  // Lógica para eliminar un activo
  console.log('Eliminar activo');
}
