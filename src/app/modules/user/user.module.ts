import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { PrimeNgModule } from '../../shared/prime-ng.module';
import { UsersRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    UserListComponent, // Tabla de usuarios
    UserFormComponent, // Formulario de creación/edición
  ],
  imports: [
    CommonModule, // Funcionalidades comunes de Angular
    ReactiveFormsModule, // Formularios reactivos
    PrimeNgModule, // Componentes de PrimeNG
    UsersRoutingModule, // Rutas específicas del módulo
  ],
})
export class UsersModule {}
