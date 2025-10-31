import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {

  // O cliente deve ser inicializado como null para que o *ngIf no HTML funcione
  // e só carregue o formulário após a busca dos dados.
  cliente: Cliente | null = null; 

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    // 1. Busca o ID da rota
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      // 2. Busca o cliente pelo ID e armazena em this.cliente
      this.clienteService.readById(+id).subscribe({
        next: (clienteData) => {
          this.cliente = clienteData;
          // TRATAMENTO DE DATA: Confiamos que o backend Java (com @JsonFormat) 
          // já formatou corretamente para 'yyyy-MM-dd' para o input HTML.
        },
        error: (e) => {
          this.snackBar.open('Erro ao carregar o cliente para edição.', 'X', { duration: 3000 });
          console.error(e);
          this.router.navigate(['/clientes']);
        }
      });
    } else {
        this.snackBar.open('ID do cliente não encontrado.', 'X', { duration: 3000 });
        this.router.navigate(['/clientes']);
    }
  }

  updateCliente(): void {
    // 🛑 CRÍTICO: Verifica se o objeto cliente está carregado e possui ID.
    if (!this.cliente || !this.cliente.id) {
        this.snackBar.open('Erro: Dados do cliente incompletos ou não carregados.', 'X', { duration: 5000 });
        console.error("Tentativa de update sem o objeto cliente ou sem ID.");
        return;
    }

    // O objeto 'this.cliente' já contém as alterações feitas no formulário
    // graças ao [(ngModel)] no HTML, **incluindo o ID e a VERSION**.
    this.clienteService.update(this.cliente).subscribe({
      next: () => {
        this.snackBar.open('Cliente atualizado com sucesso!', 'X', { duration: 3000 });
        this.router.navigate(['/clientes']);
      },
      error: (e) => {
        // Trata a exceção de Concorrência (Status HTTP 409, que é retornado do Service Java)
        if (e.status === 409) {
          this.snackBar.open('Erro de Concorrência: Os dados foram alterados por outro usuário. Por favor, recarregue e tente novamente.', 'X', { duration: 8000 });
          // Recarrega os dados do cliente para que o usuário veja a versão atualizada
          this.ngOnInit(); 
        } else {
          // Outros erros
          this.snackBar.open('Erro ao atualizar cliente.', 'X', { duration: 5000 });
          console.error(e);
        }
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/clientes']);
  }
}