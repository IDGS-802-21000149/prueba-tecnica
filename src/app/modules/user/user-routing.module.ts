import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';

const routes: Routes = [
  { path: '', component: UserListComponent }, // Tabla de usuarios
  { path: 'create', component: UserFormComponent }, // Formulario para nuevo usuario
  { path: 'edit/:id', component: UserFormComponent }, // Formulario para editar usuario
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}