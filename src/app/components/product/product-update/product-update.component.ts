import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { Fornecedor } from '../../fornecedor/fornecedor.model';
import { FornecedorService } from '../../fornecedor/fornecedor.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product!: Product;
  fornecedores: Fornecedor[] = []

  constructor(private productService: ProductService, 
    private fornecedorService: FornecedorService,
    private router: Router, 
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    const proId = this.route.snapshot.paramMap.get('proId')
    this.productService.readById(proId!).subscribe((product: Product) =>{
      this.product = product
    })
    
    this.fornecedorService.read().subscribe(fornecedores => {
      this.fornecedores = fornecedores
    })
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Produto atualizado com sucesso!')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
