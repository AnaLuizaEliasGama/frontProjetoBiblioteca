import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

//modulos importados de "material" para usar seus componentes
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
//pegar http 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';

import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';

// Direitos e imports que não são de Empréstimo
import { RedDirective } from './directives/red.directive';


//importações (Somente as que NÃO SÃO de Empréstimo)

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { FormaPagamentoReadComponent } from './components/formaPagamento/forma-pagamento-read/forma-pagamento-read.component';
import { FormaPagamentoCrudComponent } from './views/forma-pagamento-crud/forma-pagamento-crud.component';
import { FornecedorCrudComponent } from './views/fornecedor-crud/fornecedor-crud.component';
import { FornecedorCreateComponent } from './components/fornecedor/fornecedor-create/fornecedor-create.component';
import { LivroCrudComponent } from './views/livro-crud/livro-crud.component';
import { LivroCreateComponent } from './components/livro/livro-create/livro-create.component';
import { FornecedorReadComponent } from './components/fornecedor/fornecedor-read/fornecedor-read.component';
import { LivroReadComponent } from './components/livro/livro-read/livro-read.component';
import { FormaPagamentoCreateComponent } from './components/formaPagamento/forma-pagamento-create/forma-pagamento-create.component';
import { FormaPagamentoUpdateComponent } from './components/formaPagamento/forma-pagamento-update/forma-pagamento-update.component';
import { EmprestimoCreateComponent } from './components/emprestimo/emprestimo-create/emprestimo-create.component';
import { EmprestimoReadComponent } from './components/emprestimo/emprestimo-read/emprestimo-read.component';
import { EmprestimoUpdateComponent } from './components/emprestimo/emprestimo-update/emprestimo-update.component';
import { EmprestimoCrudComponent } from './views/emprestimo-crud/emprestimo-crud.component';

registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    RedDirective,

    // Componentes de CRUD (sem Empréstimo)
    FormaPagamentoReadComponent,
    FormaPagamentoCrudComponent,
    FornecedorCrudComponent,
    FornecedorCreateComponent,
    LivroCrudComponent,
    LivroCreateComponent,
    FornecedorReadComponent,
    LivroReadComponent,
    FormaPagamentoCreateComponent,
    FormaPagamentoUpdateComponent,
    EmprestimoCreateComponent,
    EmprestimoReadComponent,
    EmprestimoUpdateComponent,
    EmprestimoCrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Modulos de Material e HTTP
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }