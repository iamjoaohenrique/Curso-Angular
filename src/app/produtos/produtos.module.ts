import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutoListComponent } from './produto-list/produto-list.component';
import { ProdutoFormComponent } from './produto-form/produto-form.component';


@NgModule({
  declarations: [ProdutoListComponent, ProdutoFormComponent],
  imports: [
    CommonModule,
    ProdutosRoutingModule
  ]
})
export class ProdutosModule { }
