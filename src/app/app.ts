
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav>
      <div class="logo">🌱 EcoPonto</div>

      <div>
        <a routerLink="/">Meu Descarte</a>
        <a routerLink="/pontos-coleta">Pontos de Coleta</a>
      </div>
    </nav>

    <router-outlet></router-outlet>

    <footer>
  <p>🌱 EcoPonto — Pequenas atitudes, grandes mudanças.</p>
  <p>Descarte consciente para um futuro sustentável.</p>
</footer>
  `
})
export class App {}
