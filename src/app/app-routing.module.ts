import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { FormaPagamentoCrudComponent } from './views/forma-pagamento-crud/forma-pagamento-crud.component';
import { FornecedorCrudComponent } from './views/fornecedor-crud/fornecedor-crud.component';
import { FornecedorCreateComponent } from './components/fornecedor/fornecedor-create/fornecedor-create.component';
import { LivroCrudComponent } from './views/livro-crud/livro-crud.component';
import { FormaPagamentoCreateComponent } from './components/formaPagamento/forma-pagamento-create/forma-pagamento-create.component';
import { FormaPagamentoUpdateComponent } from './components/formaPagamento/forma-pagamento-update/forma-pagamento-update.component';

//configuração para rotear entre as paginas na home
const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },

  {
    path: "fpagamentos",
    component: FormaPagamentoCrudComponent
  },
  {
    path: "fpagamentos/create",
    component: FormaPagamentoCreateComponent
  },
  {
    path: "fpagamentos/update/:id",
    component: FormaPagamentoUpdateComponent
  },
  {
    path: "fornecedores",
    component: FornecedorCrudComponent
  },
  {
    path: "fornecedores/create",
    component: FornecedorCreateComponent
  },
  {
    path: "livros",
    component: LivroCrudComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
