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
  limit: number = 10;
  empregados: any = [];
  textoBotao = "Meu Botão";
  isHabilitado = true;
  color = "yellow";
  pokemonSelecionado: any ;

  ligadesliga() {
    // if (this.isHabilitado == true) {
    //   this.isHabilitado = false;
    // } else {
    //   this.isHabilitado = true;
    // }

    // this.isHabilitado == true ? this.isHabilitado = false : this.isHabilitado = true;

    // this.isHabilitado = this.isHabilitado == true ? false : true;

    this.isHabilitado = !this.isHabilitado;
    this.color = this.isHabilitado == true ? 'red' : 'pink';
  }

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

  getColor() {
    return this.color;
  }

  selecionarPokemon(url){
    this.usuarioService.getOnePokemon(url).subscribe(
      (sucess) => {
        console.log(sucess)
        this.pokemonSelecionado = sucess;
      },
      (error) => {
        console.log(error)
      }
    )
  }

  proximaPagina() {
    //this.offset = this.offset + 20 ;
    this.offset += 20;
    this.getAllPokemons();
  }

  trocarLimit(value) {
    console.log(value);
    this.limit=value;
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
    this.usuarioService.getAllPokemons(this.offset, this.limit).subscribe(
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
