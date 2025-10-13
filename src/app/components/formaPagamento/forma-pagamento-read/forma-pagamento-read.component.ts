import { Component, OnInit } from '@angular/core';

import { FormaPagamentoService } from '../forma-pagamento.service';
import { FormaPagamento } from '../formaPagamento.model';

@Component({
  selector: 'app-forma-pagamento-read',
  templateUrl: './forma-pagamento-read.component.html',
  styleUrls: ['./forma-pagamento-read.component.css']
})
export class FormaPagamentoReadComponent implements OnInit {

 pagamentos!: FormaPagamento[];
  displayedColumns = [
    'id',
    'descricao',
    'tipo',
    'ativo',
    'action'
  ];

  constructor(private pagamentoService: FormaPagamentoService) {}

  ngOnInit(): void {
    this.pagamentoService.read().subscribe(pagamentos => {
      this.pagamentos = pagamentos;
      console.log(pagamentos);
    });
  }

}