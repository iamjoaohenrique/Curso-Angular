import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {

  }

  getAll() {
    return [
      { id: 1, primeiro_nome: 'fabrizio', sobrenome: 'berroli', apelido: 'johsilva' },
      { id: 2, primeiro_nome: 'nelson', sobrenome: 'gonçalves', apelido: 'negool' },
      { id: 3, primeiro_nome: 'primeiro', sobrenome: 'segundo', apelido: 'teste' }
    ];
  }

  getAllPokemons(offset){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);
  }

}
