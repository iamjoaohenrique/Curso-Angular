import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  
  pokemons : any = [];  
  pokemonSelecionado : any;

  offset : number = 0;
  limit : number = 10;
    
  constructor(private usuarioService : UsuarioService) {           
    this.getAllPokemons();    
  }
  
  ngOnInit(): void {
  }

  proximaPagina(){
    this.offset = this.offset + 20;
    //this.offset += 20 ;
    this.getAllPokemons();    
  }

  trocarLimit(value){
    this.limit = value;
    this.getAllPokemons();
  }

  private getAllPokemons() {
    this.usuarioService.getAllPokemons(this.offset, this.limit).subscribe(
      (success) => {
        console.log (success);
        this.pokemons = success;
      },
      (error)=> {console.log (error)}
    );
  }

  selecionarPokemon(url){
    this.usuarioService.getOnePokemon(url).subscribe(
      (response) => {
        this.pokemonSelecionado = response;
        console.log ( this.pokemonSelecionado );
      }

    );
  }

}
