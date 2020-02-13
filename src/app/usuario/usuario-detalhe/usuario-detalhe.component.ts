import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-usuario-detalhe',
  templateUrl: './usuario-detalhe.component.html',
  styleUrls: ['./usuario-detalhe.component.css']
})
export class UsuarioDetalheComponent implements OnInit {

  @Input() pokemonDetalhe;

  constructor() { }

  ngOnInit(): void {
  }

}
