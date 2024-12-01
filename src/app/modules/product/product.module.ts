import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductsRoutingModule } from './product-routing.module';
import { PrimeNgModule } from '../../shared/prime-ng.module';

@NgModule({
  declarations: [
    ProductListComponent, // Componente para la lista de productos
    ProductFormComponent, // Componente para el formulario de productos
  ],
  imports: [
    CommonModule, // Funcionalidades comunes de Angular
    ReactiveFormsModule, // Formularios reactivos
    PrimeNgModule, // Componentes de PrimeNG
    ProductsRoutingModule, // Rutas del módulo
  ],
})
export class ProductsModule {}
