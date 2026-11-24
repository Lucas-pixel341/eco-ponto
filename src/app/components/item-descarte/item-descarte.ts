import { Component, input, output } from '@angular/core';
import { Descarte } from '../../services/descarte';

@Component({
  selector: 'app-item-descarte',
  standalone: true,
  imports: [],
  templateUrl: './item-descarte.html',
  styleUrl: './item-descarte.css'
})
export class ItemDescarteComponent {

  item = input.required<Descarte>();

  concluir = output<number>();

  remover = output<number>();

}