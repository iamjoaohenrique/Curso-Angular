import { ProdutoListComponent } from './produto-list/produto-list.component';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'produtos/produtos-list', component:ProdutoListComponent },
  { path: 'produtos/produtos-form', component: ProdutoFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
