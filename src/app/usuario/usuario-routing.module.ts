import { DataFormComponent } from './data-form/data-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';



const routes: Routes = [
  { path: 'usuarios', component: UsuarioFormComponent },
  { path: 'usuarios/template-form', component:TemplateFormComponent },
  { path: 'usuarios/data-form', component: DataFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
