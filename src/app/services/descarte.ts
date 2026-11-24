import { Injectable } from '@angular/core';

export interface Descarte {
  id: number;
  material: string;
  local: string;
  concluido: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DescarteService {

  private chave = 'eco-ponto-descartes';
  private descartes: Descarte[] = [];

  constructor() {
    this.carregar();
  }

  listar(): Descarte[] {
    return [...this.descartes];
  }

  adicionar(material: string, local: string): void {
    const novo: Descarte = {
      id: Date.now(),
      material: material,
      local: local,
      concluido: false
    };

    this.descartes.push(novo);
    this.salvar();
  }

  concluir(id: number): void {
    this.descartes = this.descartes.map(item =>
      item.id === id ? { ...item, concluido: true } : item
    );

    this.salvar();
  }

  remover(id: number): void {
    this.descartes = this.descartes.filter(item => item.id !== id);
    this.salvar();
  }

  private salvar(): void {
    // Transforma a lista em texto JSON para poder armazená-la.
    const dados = JSON.stringify(this.descartes);

    // Guarda os dados no navegador.
    localStorage.setItem(this.chave, dados);
  }

  private carregar(): void {
    // Procura os dados que já foram salvos no navegador.
    const dados = localStorage.getItem(this.chave);

    // Se encontrar dados, transforma o texto JSON novamente em lista.
    if (dados) {
      this.descartes = JSON.parse(dados);
    }
  }
}