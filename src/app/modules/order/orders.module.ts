import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { OrdersRoutingModule } from './orders-routing.module';

import { OrderListComponent } from './components/order-list/order-list.component';
import { PrimeNgModule } from '../../shared/prime-ng.module';
import { OrderFormComponent } from './components/order-form/order-form.component';

@NgModule({
  declarations: [
    OrderListComponent, // Tabla de órdenes
    OrderFormComponent
  ],
  imports: [
    CommonModule, // Funcionalidades comunes de Angular
    ReactiveFormsModule, // Formularios reactivos
    PrimeNgModule, // Componentes de PrimeNG
    OrdersRoutingModule, // Rutas específicas del módulo
  ]
})
export class OrdersModule {}
