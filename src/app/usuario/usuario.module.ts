import { SharedModule } from './../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { GrifarParagrafoDirective } from './diretivas/grifar-paragrafo.directive';
import { DataPipe } from './pipes/data.pipe';
import { TemplateFormComponent } from './template-form/template-form.component';
import { DataFormComponent } from './data-form/data-form.component';

@NgModule({
  declarations: [
    UsuarioFormComponent,
    GrifarParagrafoDirective,
    DataPipe,
    TemplateFormComponent,
    DataFormComponent   
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    UsuarioFormComponent,
  ]

  
})
export class UsuarioModule { }
