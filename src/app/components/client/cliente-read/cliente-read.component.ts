import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../cliente.model';
import { ClientService } from '../../client.service';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit {
deleteCliente(arg0: any) {
throw new Error('Method not implemented.');
}

  clientes: Cliente[] = [];

  displayedColumns = ['id', 'cliNome', 'cliCpf', 'cliRg', 'cliDataNascimento', 'cliSexo', 'cliAtivo', 'acoes'];

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.carregarClientes();
  }

  carregarClientes(): void {
    this.clienteService.read().subscribe({
      next: (clientes: Cliente[]) => {
        this.clientes = clientes;
      },
      error: (e: any) => {
        this.clienteService.handleError(e);
      }
    });
  }

  navigateToClienteCreate(): void {
    this.router.navigate(['/clientes/create']);
  }

  editarCliente(id: number): void {
    this.router.navigate([`/clientes/update/${id}`]);
  }

  removerCliente(id: number): void {
    if (confirm('Tem certeza que deseja remover este cliente?')) {
      this.clienteService.delete(id).subscribe({
        next: () => {
          this.clienteService.showMessage('Cliente removido com sucesso!');
          this.carregarClientes();
        },
        error: (e: any) => {
          this.clienteService.handleError(e);
        }
      });
    }
  }
}