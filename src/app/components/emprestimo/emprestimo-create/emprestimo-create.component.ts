import { Component, OnInit } from '@angular/core';
import { Emprestimo } from '../emprestimo.model';
import { EmprestimoService } from '../emprestimo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emprestimo-create',
  templateUrl: './emprestimo-create.component.html',
  styleUrls: ['./emprestimo-create.component.css']
})
export class EmprestimoCreateComponent implements OnInit {

  emprestimo: Emprestimo = {
    // Inicialização básica do objeto, sem IDs
    dataDevolucao: '',
    dataDevolucaoReal: null, // Nulo na criação
    dataEmprestimo: '',
    status: 'PENDENTE', // Status inicial
    valorMulta: 0,
    clienteId: 0, // Placeholder
    livroId: 0    // Placeholder
  };

  constructor(
    private emprestimoService: EmprestimoService, 
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createEmprestimo(): void {
    // Converte os IDs para número, caso o formulário retorne string
    this.emprestimo.clienteId = Number(this.emprestimo.clienteId);
    this.emprestimo.livroId = Number(this.emprestimo.livroId);

    // CORREÇÃO: Adicionado o método 'create'
    this.emprestimoService.create(this.emprestimo).subscribe({
      next: () => {
        this.emprestimoService.showMessage('Empréstimo registrado com sucesso!');
        this.router.navigate(['/emprestimos']);
      },
      // CORREÇÃO: Tipagem do parâmetro 'e'
      error: (e: any) => { 
        this.emprestimoService.showMessage('Erro ao criar Empréstimo.', 'snackbar-error');
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/emprestimos']);
  }
}