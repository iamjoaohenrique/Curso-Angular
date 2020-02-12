import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  usuarios:any = [];

  constructor(private usuarioService : UsuarioService) { 
    this.usuarios = this.usuarioService.getAll();
  }

  ngOnInit(): void {
  }

}
