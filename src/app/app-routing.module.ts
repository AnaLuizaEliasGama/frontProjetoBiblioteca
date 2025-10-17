import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { FormaPagamentoCrudComponent } from './views/forma-pagamento-crud/forma-pagamento-crud.component';
import { FornecedorCrudComponent } from './views/fornecedor-crud/fornecedor-crud.component';
import { FornecedorCreateComponent } from './components/fornecedor/fornecedor-create/fornecedor-create.component';
import { LivroCrudComponent } from './views/livro-crud/livro-crud.component';
import { FormaPagamentoCreateComponent } from './components/formaPagamento/forma-pagamento-create/forma-pagamento-create.component';
import { FormaPagamentoUpdateComponent } from './components/formaPagamento/forma-pagamento-update/forma-pagamento-update.component';
import { LivroUpdateComponent } from './components/livro/livro-update/livro-update.component';
import { LivroCreateComponent } from './components/livro/livro-create/livro-create.component';
import { EmprestimoCrudComponent } from './views/emprestimo-crud/emprestimo-crud.component';
import { EmprestimoCreateComponent } from './components/emprestimo/emprestimo-create/emprestimo-create.component';
import { EmprestimoReadComponent } from './components/emprestimo/emprestimo-read/emprestimo-read.component';
import { EmprestimoUpdateComponent } from './components/emprestimo/emprestimo-update/emprestimo-update.component';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { ClienteCreateComponent } from './components/client/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './components/client/cliente-update/cliente-update.component';

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

  
  { path: 'livros/update/:id',
   component: LivroUpdateComponent },

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
  },

{path: "livros/create",
component: LivroCreateComponent
}, 
{
  path: "emprestimos",
  component: EmprestimoCrudComponent // Geralmente a tela que exibe o LivroRead
},

{
  path: "emprestimos/create",
  component: EmprestimoCreateComponent
},

{
  path: "emprestimos/update/:id",
  component: EmprestimoUpdateComponent
},
{
  path: "clientes",
  component: ClienteCrudComponent, // Rota Pai
  children: [
    {
      path: "create", // Rota: /clientes/create
      component: ClienteCreateComponent
    },
    {
      path: "update/:id", // Rota: /clientes/update/:id
      component: ClienteUpdateComponent
    }
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
