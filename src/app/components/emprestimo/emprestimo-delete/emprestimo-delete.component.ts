import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../emprestimo.model';
import { ProductService } from '../emprestimo.service';

@Component({
  selector: 'app-emprestimo-delete',
  templateUrl: './emprestimo-delete.component.html',
  styleUrls: ['./emprestimo-delete.component.css']
})

export class ProductDeleteComponent implements OnInit {

  emprestimo!: Product;

  constructor(
    private emprestimoService: ProductService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const proId = this.route.snapshot.paramMap.get('proId');
    this.emprestimoService.readById(proId!).subscribe(emprestimo =>{
      this.emprestimo = emprestimo
    })
  }

  deleteProduct(): void {
    this.emprestimoService.delete(this.emprestimo.proId!).subscribe(() =>{
    this.emprestimoService.showMessage('Produto excluido com sucesso!')  
    this.router.navigate(['/emprestimos'])
    })
  }

  cancel(): void{
    this.router.navigate(['/emprestimos'])
  }
}