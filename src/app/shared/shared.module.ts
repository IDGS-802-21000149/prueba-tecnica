import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router'; // Necesario para usar routerLink
import { PrimeNgModule } from './prime-ng.module'; // Componentes de PrimeNG

@NgModule({
  declarations: [
    NavbarComponent, // Declara el componente
  ],
  imports: [
    CommonModule,
    RouterModule, // Importa routerLink para la navegación
    PrimeNgModule, // Módulos de PrimeNG usados en el Navbar
  ],
  exports: [
    NavbarComponent, // Exporta el Navbar para que otros módulos lo usen
  ],
})
export class SharedModule {}
