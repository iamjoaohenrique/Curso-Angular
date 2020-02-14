import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioDetalheComponent } from './usuario-detalhe/usuario-detalhe.component';
import { GrifarParagrafoDirective } from './diretivas/grifar-paragrafo.directive';
import { DataPipe } from './pipes/data.pipe';




@NgModule({
  declarations: [
    UsuarioFormComponent,
    UsuarioDetalheComponent,
    GrifarParagrafoDirective,
    DataPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UsuarioFormComponent
  ]

  
})
export class UsuarioModule { }
