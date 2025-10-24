import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente.model';
import { ClientService } from '../../client.service';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {

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
    cliDataCadastro: ''
  };

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.clienteService.readById(+id).subscribe({
        next: (cliente: Cliente) => {
          this.cliente = cliente;
        },
        error: (e: any) => {
          this.clienteService.handleError(e);
        }
      });
    }
  }

  updateCliente(): void {
    this.clienteService.update(this.cliente).subscribe({
      next: (clienteAtualizado) => {
        this.clienteService.showMessage('Cliente atualizado com sucesso!');
        this.router.navigate(['/clientes']);
      },
      error: (e: any) => {
        this.clienteService.handleError(e);
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/clientes']);
  }
}