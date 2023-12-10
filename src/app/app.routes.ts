// app-routes.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { MobiliarioComponent } from './mobiliario/mobiliario.component';
import { TransporteComponent } from './transporte/transporte.component';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';
import { ProfileComponent } from './profile/profile.component';
import { InventoryComponent } from './inventory/inventory.component';
import { MantenimientosComponent } from './mantenimientos/mantenimientos.component';

 

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'main', component: MainComponent },
  { path: 'mobiliario', component: MobiliarioComponent },
  { path: 'transporte', component: TransporteComponent },
  { path: 'tecnologia', component: TecnologiaComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'mantenimientos', component: MantenimientosComponent },
  // Puedes agregar más rutas según sea necesario
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})

export class AppRoutingModule {}

