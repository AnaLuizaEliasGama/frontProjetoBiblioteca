// ARQUIVO: emprestimo-read.component.ts
import { Component, OnInit } from '@angular/core';
import { Emprestimo } from '../emprestimo.model';
import { EmprestimoService } from '../emprestimo.service';
import { Router } from '@angular/router'; // ⬅️ IMPORTE O ROUTER

@Component({
  selector: 'app-emprestimo-read',
  templateUrl: './emprestimo-read.component.html',
  styleUrls: ['./emprestimo-read.component.css']
})
export class EmprestimoReadComponent implements OnInit {

  emprestimos: Emprestimo[] = [];
  displayedColumns = ['id', 'clienteId', 'livroId', 'dataEmprestimo', 'dataDevolucao', 'status', 'acoes'];

  constructor(
    private emprestimoService: EmprestimoService,
    private router: Router // ⬅️ INJETE O ROUTER
  ) { }

  ngOnInit(): void {
    this.emprestimoService.read().subscribe((emprestimos: Emprestimo[]) => { 
      this.emprestimos = emprestimos;
    });
  }

  // ⬅️ FUNÇÃO NECESSÁRIA PARA O BOTÃO FUNCIONAR
  navigateToEmprestimoCreate(): void {
    this.router.navigate(['/emprestimos/create']); 
  }

  // ⬅️ FUNÇÃO DE DELETAR NECESSÁRIA
  deleteEmprestimo(id: number): void { 
    if (confirm('Deseja realmente excluir este empréstimo?')) {
        this.emprestimoService.delete(id).subscribe({
            next: () => {
                this.emprestimoService.showMessage('Empréstimo excluído com sucesso!');
                this.ngOnInit(); // Recarrega a lista
            },
            error: () => {
                this.emprestimoService.showMessage('Erro ao excluir Empréstimo.', 'snackbar-error');
            }
        });
    }
  }
}