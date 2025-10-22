// src/app/components/client/cliente-read/cliente-read.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ClienteService } from '../cliente.service'
import { Cliente } from './../cliente.model';




@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit {

  clientes: Cliente[] = [];
  displayedColumns = ['cliId', 'cliNome', 'cliCpf', 'cliAtivo', 'acoes'];

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.clienteService.read().subscribe(clientes => {
      this.clientes = clientes;
    });
  }

  navigateToClienteCreate(): void {
    this.router.navigate(['/clientes/create']);
  }

  deleteCliente(cliId: string): void {  // ✅ Agora recebe string
    if (confirm('Deseja realmente excluir este cliente?')) {
      this.clienteService.delete(cliId).subscribe({
        next: () => {
          this.clienteService.showMessage('Cliente excluído com sucesso!');
          this.ngOnInit(); // Recarrega a lista
        },
        error: (e) => {
          this.clienteService.handleError(e);
        }
      });
    }
  }
}