import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderFormComponent } from './components/order-form/order-form.component';

const routes: Routes = [
  { path: '', component: OrderListComponent }, // Tabla de órdenes
  { path: 'create', component: OrderFormComponent }, // Formulario para nueva orden
  { path: 'edit/:id', component: OrderFormComponent }, // Formulario para editar orden
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
