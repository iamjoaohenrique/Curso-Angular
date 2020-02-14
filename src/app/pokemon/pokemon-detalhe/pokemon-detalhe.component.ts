import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-detalhe',
  templateUrl: './pokemon-detalhe.component.html',
  styleUrls: ['./pokemon-detalhe.component.css']
})
export class PokemonDetalheComponent implements OnInit {

  @Input() pokemonDetalhe ;

  constructor() { }

  ngOnInit(): void {
  }

}
