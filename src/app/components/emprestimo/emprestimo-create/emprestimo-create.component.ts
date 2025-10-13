import { Component, OnInit } from '@angular/core';
import { ProductService } from '../emprestimo.service';
import { Router } from '@angular/router';
import { Product } from '../emprestimo.model';
import { Fornecedor } from '../../fornecedor/fornecedor.model';
import { FornecedorService } from '../../fornecedor/fornecedor.service';

@Component({
  selector: 'app-emprestimo-create',
  templateUrl: './emprestimo-create.component.html',
  styleUrls: ['./emprestimo-create.component.css']
})
export class ProductCreateComponent implements OnInit {
createEmprestimo() {
throw new Error('Method not implemented.');
}

  emprestimo: Product = {
    proNome: '',
    proPrecoCusto: 0,
    proPrecoVenda: 0,
    fornecedor: undefined
  }

  fornecedores: Fornecedor[] = []

  //importando emprestimoService
  constructor(private emprestimoService: ProductService,
    private fornecedorService: FornecedorService,
    private router: Router) { }
  
  ngOnInit(): void {
    this.fornecedorService.read().subscribe(fornecedores => {
      this.fornecedores = fornecedores
    })
  }

  createProduct(): void {
    this.emprestimoService.create(this.emprestimo).subscribe(() => {
      this.emprestimoService.showMessage('Emprestimo criado!')
      this.router.navigate(['/emprestimos'])
    })
  }

  cancel(): void {
    this.router.navigate(['/emprestimos'])
  }  
}
