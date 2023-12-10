import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mantenimientos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mantenimientos.component.html',
  styleUrl: './mantenimientos.component.css'
})
export class MantenimientosComponent {

}


/*document.addEventListener('DOMContentLoaded', function() {
  const formulario = document.getElementById('formulario') as HTMLFormElement | null;

  if (formulario) {
      formulario.addEventListener('submit', function(event) {
          event.preventDefault();

          const facultad = (<HTMLInputElement>document.getElementById('facultad')).value;
          const tipoActivo = (<HTMLInputElement>document.getElementById('tipoActivo')).value;
          const activo = (<HTMLInputElement>document.getElementById('activo')).value;
          const tipo = (<HTMLInputElement>document.getElementById('tipo')).value;
          const fecha = (<HTMLInputElement>document.getElementById('fecha')).value;
          const descripcion = (<HTMLInputElement>document.getElementById('descripcion')).value;
          const responsable = (<HTMLInputElement>document.getElementById('responsable')).value;

          const tabla = document.getElementById('tablaMantenimientos');
          const tbody = tabla?.querySelector('tbody');

          if (tbody) {
              const nuevaFila = document.createElement('tr');

              // Crear el resto de las celdas
              const celdaFacultad = document.createElement('td');
              const celdaTipoActivo = document.createElement('td');
              const celdaActivo = document.createElement('td');
              const celdaTipo = document.createElement('td');
              const celdaFecha = document.createElement('td');
              const celdaDescripcion = document.createElement('td');
              const celdaResponsable = document.createElement('td');

              celdaFacultad.textContent = facultad;
              celdaTipoActivo.textContent = tipoActivo;
              celdaActivo.textContent = activo;
              celdaTipo.textContent = tipo;
              celdaFecha.textContent = fecha;
              celdaDescripcion.textContent = descripcion;
              celdaResponsable.textContent = responsable;

              nuevaFila.appendChild(celdaFacultad);
              nuevaFila.appendChild(celdaTipoActivo);
              nuevaFila.appendChild(celdaActivo);
              nuevaFila.appendChild(celdaTipo);
              nuevaFila.appendChild(celdaFecha);
              nuevaFila.appendChild(celdaDescripcion);
              nuevaFila.appendChild(celdaResponsable);

              // Crear celda para el botón "Realizado"
              const celdaRealizado = document.createElement('td');
              const botonRealizado = document.createElement('button');
              botonRealizado.textContent = 'Realizado';
              botonRealizado.classList.add('marcar-realizado'); // Agrega una clase al botón
              celdaRealizado.appendChild(botonRealizado);
              nuevaFila.appendChild(celdaRealizado);

              tbody.appendChild(nuevaFila);

              formulario.reset();
          }
      });
  }

  // Agrega un event listener para los botones de "realizado"
  document.addEventListener('click', function(event) {
      if ((<Element>event.target).classList.contains('marcar-realizado')) {
          // Encuentra la fila a la que pertenece el botón
          const fila = (<HTMLElement>event.target).parentElement?.parentElement;

          // Elimina la fila de la tabla
          fila?.remove();
      }
  });
});

*/