
// src/app/client/cliente-create/cliente-create.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from './../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent {

  cliente: Cliente = {
    cliId: '',
    cliNome: '',
    cliCpf: '',
    cliRg: '',
    cliDataNascimento: '',
    cliSexo: '',
    cliObservacoes: '',
    cliAtivo: true,
    cliDataCadastro: new Date().toISOString().split('T')[0]
  };

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) { }

  createCliente(): void {
    this.clienteService.create(this.cliente).subscribe({
      next: () => {
        this.clienteService.showMessage('Cliente cadastrado com sucesso!');
        this.router.navigate(['/clientes']);
      },
      error: (e) => {
        this.clienteService.handleError(e);
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/clientes']);
  }
}