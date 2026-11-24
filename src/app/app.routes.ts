import { Routes } from '@angular/router';
import { MeuDescarteComponent } from './pages/meu-descarte/meu-descarte';
import { PontosColetaComponent } from './pages/pontos-coleta/pontos-coleta';

export const routes: Routes = [
  { path: '', component: MeuDescarteComponent },
  { path: 'pontos-coleta', component: PontosColetaComponent }
];