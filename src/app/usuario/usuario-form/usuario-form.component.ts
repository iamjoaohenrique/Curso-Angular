import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  usuarios: any = [];
  pokemons: any = [];
  offset: number = 0;
  limit: number = 0;
  empregados: any = [];

  constructor(private usuarioService: UsuarioService) {
    this.usuarios = this.usuarioService.getAll();
    this.getAllPokemons();
    this.getAllEmpregados();

    /* this.empregados = this.usuarioService.getAllEmpregados();

    this.usuarioService.getAllEmpregados().subscribe(
      (sucess) => {
        console.log(sucess);
        this.empregados = sucess;
      },
      (error) => { console.log(error) }
    ); */

  
  }

  trocarLimite(){
    this.limit
    this.getAllPokemons();
  }

  proximaPagina() {
    //this.offset = this.offset + 20 ;
    this.offset += 20;
    this.getAllPokemons();
  }

  private getAllEmpregados() {
    this.usuarioService.getAllEmpregados().subscribe(
      (sucess) => {
        console.log(sucess)
        this.empregados = sucess;
      },
      (error) => {
        console.log(error)
      }
    );
  }

  private getAllPokemons() {
    this.usuarioService.getAllPokemons(this.offset,this.limit).subscribe(
      (sucess) => {
        console.log(sucess)
        this.pokemons = sucess;
      },
      (error) => {
        console.log(error)
      }
    );
  }

  ngOnInit(): void {
  }

}
