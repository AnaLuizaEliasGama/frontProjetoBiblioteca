import { Component, OnInit } from '@angular/core';
import { FormaPagamentoService } from '../forma-pagamento.service';
import { Router } from '@angular/router';
import { FormaPagamento } from '../formaPagamento.model';

@Component({
  selector: 'app-forma-pagamento-create',
  templateUrl: './forma-pagamento-create.component.html',
  styleUrls: ['./forma-pagamento-create.component.css']
})

export class FormaPagamentoCreateComponent implements OnInit {

  pagamento: FormaPagamento = {
    descricao: '',
    tipo: '',
    numeroParcelas: 0,
    diasEntreParcelas: 0,
    permiteTroco: false,
    taxaPercentual: 0,
    ativo: false
  }

  //importando pagamentoService
  constructor(private pagamentoService: FormaPagamentoService,
    private router: Router) { }

  ngOnInit(): void {   
  }

  createPagamento(): void {
    this.pagamentoService.create(this.pagamento).subscribe(() => {
      this.pagamentoService.showMessage('Produto criado!')
      this.router.navigate(['/fpagamentos'])
    })
  }

  cancel(): void {
    this.router.navigate(['/fpagamentos'])
  }

}
