import { UsuarioRoutingModule } from './usuario-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { GrifarParagrafoDirective } from './diretivas/grifar-paragrafo.directive';
import { DataPipe } from './pipes/data.pipe';





@NgModule({
  declarations: [
    UsuarioFormComponent,
    GrifarParagrafoDirective,
    DataPipe,
   
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ],
  exports: [
    UsuarioFormComponent,
  ]

  
})
export class UsuarioModule { }
