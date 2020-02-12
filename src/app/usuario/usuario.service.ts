import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  getAll(){
    return [
      {id : 1 ,primeiro_nome : 'fabrizio', sobrenome : 'berroli' , apelido : 'johsilva'},
      {id : 2 ,primeiro_nome : 'nelson', sobrenome : 'gonçalves' , apelido : 'negool'},
      {id : 3 ,primeiro_nome : 'primeiro', sobrenome : 'segundo' , apelido : 'teste'}
    ];
  }
  
}
