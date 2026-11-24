
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DescarteService, Descarte } from '../../services/descarte';
import { ItemDescarteComponent } from '../../components/item-descarte/item-descarte';

@Component({
  selector: 'app-meu-descarte',
  standalone: true,
  imports: [FormsModule, ItemDescarteComponent],
  templateUrl: './meu-descarte.html',
  styleUrl: './meu-descarte.css'
})
export class MeuDescarteComponent implements OnInit {

  material = '';
  local = '';
  descartes: Descarte[] = [];

  constructor(private descarteService: DescarteService) {}

  ngOnInit(): void {
    this.atualizarLista();
  }

  atualizarLista(): void {
    this.descartes = this.descarteService.listar();
  }

  adicionar(): void {
    if (!this.material || !this.local.trim()) {
      alert('Preencha o material e o local!');
      return;
    }

    this.descarteService.adicionar(this.material, this.local);

    this.material = '';
    this.local = '';

    this.atualizarLista();
  }

  concluir(id: number): void {
    this.descarteService.concluir(id);
    this.atualizarLista();
  }

  remover(id: number): void {
    this.descarteService.remover(id);
    this.atualizarLista();
  }

  get totalConcluidos(): number {
    return this.descartes.filter(item => item.concluido).length;
  }
}