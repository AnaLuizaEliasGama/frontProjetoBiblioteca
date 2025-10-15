import { Component, OnInit } from '@angular/core';
import { EmprestimoService } from '../emprestimo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Emprestimo } from '../emprestimo.model';
@Component({
  selector: 'app-emprestimo-update',
  templateUrl: './emprestimo-update.component.html',
  styleUrls: ['./emprestimo-update.component.css']
})
export class EmprestimoUpdateComponent implements OnInit {

  emprestimo: Emprestimo = {
    dataDevolucao: '',
    dataDevolucaoReal: null,
    dataEmprestimo: '',
    status: '',
    valorMulta: 0,
    clienteId: 0,
    livroId: 0
  };

  constructor(
    private emprestimoService: EmprestimoService,
    private router: Router,
    private route: ActivatedRoute // Para pegar o ID da URL
  ) { }

  ngOnInit(): void {
    // Pega o 'id' da URL (ex: /emprestimos/update/1)
    const id = this.route.snapshot.paramMap.get('id'); 
    
    if (id) {
        this.emprestimoService.readById(id).subscribe(emprestimo => {
            this.emprestimo = emprestimo;
        });
    } else {
        this.emprestimoService.showMessage('ID de Empréstimo não encontrado.', 'snackbar-error');
        this.router.navigate(['/emprestimos']);
    }
  }

  updateEmprestimo(): void {
    this.emprestimoService.update(this.emprestimo).subscribe({
      next: () => {
        this.emprestimoService.showMessage('Empréstimo atualizado com sucesso!');
        this.router.navigate(['/emprestimos']);
      },
      error: (e) => {
        this.emprestimoService.showMessage('Erro ao atualizar Empréstimo.', 'snackbar-error');
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/emprestimos']);
  }
}