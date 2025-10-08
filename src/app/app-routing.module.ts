import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {ProductCrudComponent} from  './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { FormaPagamentoCrudComponent } from './views/forma-pagamento-crud/forma-pagamento-crud.component';
import { FornecedorCrudComponent } from './views/fornecedor-crud/fornecedor-crud.component';
import { FornecedorCreateComponent } from './components/fornecedor/fornecedor-create/fornecedor-create.component';
import { LivroCrudComponent } from './views/livro-crud/livro-crud.component';

//configuração para rotear entre as paginas na home
const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  },
  {
    path: "products/update/:proId",
    component: ProductUpdateComponent
  },
  {
    path: "products/delete/:proId",
    component: ProductDeleteComponent
  },
  {
    path: "fpagamentos",
    component: FormaPagamentoCrudComponent
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
