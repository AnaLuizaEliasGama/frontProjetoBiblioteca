import { ClienteService } from './../cliente.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../../client.service';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent {

  cliente: Cliente = {
    id: 0,
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
    private ClienteService: ClienteService,
    private router: Router
  ) { }

  createCliente(): void {
    this.ClienteService.create(this.cliente).subscribe({
      next: (clienteSalvo) => {
        this.ClienteService.showMessage('Cliente cadastrado com sucesso!');
        this.router.navigate(['/clientes']);
      },
      error: (e: any) => {
        this.ClienteService.handleError(e);
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/clientes']);
  }
}