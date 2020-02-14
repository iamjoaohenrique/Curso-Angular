import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { GrifarParagrafoDirective } from './diretivas/grifar-paragrafo.directive';
import { DataPipe } from './pipes/data.pipe';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetalheComponent } from './pokemon-detalhe/pokemon-detalhe.component';




@NgModule({
  declarations: [
    UsuarioFormComponent,
    GrifarParagrafoDirective,
    DataPipe,
    PokemonListComponent,
    PokemonDetalheComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UsuarioFormComponent,
    PokemonListComponent
  ]

  
})
export class UsuarioModule { }
