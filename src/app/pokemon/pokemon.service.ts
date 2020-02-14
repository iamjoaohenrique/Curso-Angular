import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {  }

  getAllPokemons(offset,limit){
    //return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    return this.http.get(`https://pokeapi.co/api/v2/pokemon-form?limit=${limit}&offset=${offset}`);
  }

  getOnePokemon(url){
    return this.http.get(url);
  }
}
