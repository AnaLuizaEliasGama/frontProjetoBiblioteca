import { Component, OnInit } from '@angular/core';
import { Emprestimo } from '../emprestimo.model';
import { EmprestimoService } from '../emprestimo.service';

@Component({
  selector: 'app-emprestimo-read',
  templateUrl: './emprestimo-read.component.html',
  styleUrls: ['./emprestimo-read.component.css']
}) // <<<--- FECHAMENTO CORRIGIDO: CHAVE '}' E PARÊNTESE ')' ADICIONADOS AQUI
export class EmprestimoReadComponent implements OnInit {

  emprestimos: Emprestimo[] = [];
  
  // Colunas para a tabela (ajustadas ao Model)
  displayedColumns = ['id', 'clienteId', 'livroId', 'dataEmprestimo', 'dataDevolucao', 'status', 'acoes'];

  constructor(private emprestimoService: EmprestimoService) { }

  ngOnInit(): void {
    // Você pode tipar 'emprestimos' para evitar erro TS7006 implícito (any type)
    this.emprestimoService.read().subscribe((emprestimos: Emprestimo[]) => { 
      this.emprestimos = emprestimos;
    });
  }
}