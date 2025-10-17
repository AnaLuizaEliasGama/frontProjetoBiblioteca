// ARQUIVO: cliente-read.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit {

  clientes: Cliente[] = [];
  // Define as colunas que serão exibidas na tabela
  displayedColumns = [
    'id', 
    'cliId', 
    'nome', 
    'cpf', 
    'email', 
    'telefone', 
    'ativo', 
    'acoes'
  ];

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.clienteService.read().subscribe(clientes => {
      this.clientes = clientes;
      console.log(this.clientes); // Verifique os dados no console
    });
  }
  
  // Função que será usada para navegar para a tela de Edição/Update
  navigateToClienteUpdate(id: number | undefined): void {
    if (id) {
        this.router.navigate([`/clientes/update/${id}`]);
    }
  }

  // Função para lidar com a exclusão de um cliente
  deleteCliente(id: number | undefined): void {
    if (id) {
        if (confirm('Deseja realmente excluir este cliente?')) {
            this.clienteService.delete(id).subscribe({
                next: () => {
                    this.clienteService.showMessage('Cliente excluído com sucesso!');
                    this.ngOnInit(); // Recarrega a lista após a exclusão
                },
                error: (e) => {
                    // Mensagem de erro tratada no service
                }
            });
        }
    }
  }

}