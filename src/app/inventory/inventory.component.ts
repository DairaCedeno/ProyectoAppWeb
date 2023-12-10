import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {

}


    /*Esto sirve para que una vez que hayan datos ingresados en las tablas de inventario, 
    se  puedan editar o eliminar mediante un boton que se incluirá en la tabla dentro de (acciones).
    

function editarActivo(btn: HTMLButtonElement): void {
 const row = btn.parentNode?.parentNode as HTMLTableRowElement | null;
  if (row) {
    const cells = row.getElementsByTagName('td');

    const facultad: string = cells[0].innerText;
    const tipoActivo: string = cells[1].innerText;
    const marca: string = cells[2].innerText;
    const modelo: string = cells[3].innerText;
    const numeroSerie: string = cells[4].innerText;
    const valorAproximado: string = cells[5].innerText;
    const estadoFisico: string = cells[6].innerText;
    const observacion: string = cells[7].innerText;
  }
}

function eliminarActivo(btn: HTMLButtonElement): void {
  const row = btn.parentNode?.parentNode as HTMLTableRowElement | null;
  if (row && row.parentNode) {
    row.parentNode.removeChild(row);
  }
}*/