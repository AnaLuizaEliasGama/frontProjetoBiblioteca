import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormaPagamento } from '../FormaPagamento.model';
import { FormaPagamentoService } from '../forma-pagamento.service'; 

@Component({
  selector: 'app-forma-pagamento-update',
  templateUrl: './forma-pagamento-update.component.html',
  styleUrls: ['./forma-pagamento-update.component.css']
})
export class FormaPagamentoUpdateComponent implements OnInit {

  pagamento: FormaPagamento = {
    descricao: '',
    tipo: '',
    numeroParcelas: 0,
    diasEntreParcelas: 0,
    permiteTroco: false,
    taxaPercentual: 0,
    ativo: true
  };

  constructor(
    private pagamentoService: FormaPagamentoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pagamentoService.getById(+id).subscribe((pagamento: FormaPagamento) => {
        this.pagamento = pagamento;
      });
    }
  }

  updatePagamento(): void {
    this.pagamentoService.update(this.pagamento).subscribe(() => {
      console.log('Pagamento atualizado com sucesso!');
      this.router.navigate(['/pagamentos']);
    });
  }

  cancel(): void {
    this.router.navigate(['/pagamentos']);
  }
}
