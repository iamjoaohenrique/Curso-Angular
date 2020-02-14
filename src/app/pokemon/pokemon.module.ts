import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetalheComponent } from './pokemon-detalhe/pokemon-detalhe.component';


@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetalheComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule
  ],
  exports: [
    PokemonListComponent
  ]
  
})
export class PokemonModule { }
