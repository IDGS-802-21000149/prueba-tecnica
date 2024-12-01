import { provideServerRendering } from '@angular/platform-server';
import { bootstrapApplication } from '@angular/platform-browser';

// ELIMINAR ESTE BLOQUE SI NO USAS SSR
export const bootstrap = () => {
  return bootstrapApplication(AppServerModule, {
    providers: [provideServerRendering()],
  });
};
