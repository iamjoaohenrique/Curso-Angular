import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

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
    
  constructor(private PokemonService : PokemonService) {           
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
    this.PokemonService.getAllPokemons(this.offset, this.limit).subscribe(
      (success) => {
        console.log (success);
        this.pokemons = success;
      },
      (error)=> {console.log (error)}
    );
  }

  selecionarPokemon(url){
    this.PokemonService.getOnePokemon(url).subscribe(
      (response) => {
        this.pokemonSelecionado = response;
        console.log ( this.pokemonSelecionado );
      }

    );
  }

}
