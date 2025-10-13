import { Component, OnInit } from '@angular/core';
import { Product } from '../emprestimo.model';
import { ProductService } from '../emprestimo.service';

@Component({
  selector: 'app-emprestimo-read',
  templateUrl: './emprestimo-read.component.html',
  styleUrls: ['./emprestimo-read.component.css']
})
export class ProductReadComponent implements OnInit {

  emprestimos!: Product[]
  displayedColumns = ['proId', 'proNome', 'proPrecoCusto', 'proPrecoVenda', 'fornecedor', 'action']

  constructor(private emprestimoService: ProductService) { }

  ngOnInit(): void {
    this.emprestimoService.read().subscribe(emprestimos => {
      this.emprestimos = emprestimos
      console.log(emprestimos)  
    })
  }

}