import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioDetalheComponent } from './usuario-detalhe/usuario-detalhe.component';




@NgModule({
  declarations: [
    UsuarioFormComponent,
    UsuarioDetalheComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UsuarioFormComponent
  ]

  
})
export class UsuarioModule { }
