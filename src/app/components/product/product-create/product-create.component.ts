import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { Fornecedor } from '../../fornecedor/fornecedor.model';
import { FornecedorService } from '../../fornecedor/fornecedor.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    proNome: '',
    proPrecoCusto: 0,
    proPrecoVenda: 0,
    fornecedor: undefined
  }

  fornecedores: Fornecedor[] = []

  //importando productService
  constructor(private productService: ProductService,
    private fornecedorService: FornecedorService,
    private router: Router) { }
  
  ngOnInit(): void {
    this.fornecedorService.read().subscribe(fornecedores => {
      this.fornecedores = fornecedores
    })
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado!')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }  
}
