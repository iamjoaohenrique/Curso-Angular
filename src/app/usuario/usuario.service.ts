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

  getAllEmpregados(){
    return this.http.get(`http://dummy.restapiexample.com/api/v1/employees`);
  }

}
