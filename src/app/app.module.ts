import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module'; // Importa el módulo compartido
import { CoreModule } from './core/core.module'; // Importa el módulo de servicios globales

@NgModule({
  declarations: [
    AppComponent, // Declara el componente raíz
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Configuración de rutas principales
    SharedModule, // Componentes compartidos como NavbarComponent
    CoreModule, // Servicios globales
  ],
  bootstrap: [AppComponent], // Componente raíz
})
export class AppModule {}
