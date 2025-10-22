// src/app/client/cliente-update/cliente-update.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {

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
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const cliId = this.route.snapshot.paramMap.get('id');
    if (cliId) {
      this.clienteService.readById(cliId).subscribe(cliente => {
        this.cliente = cliente;
      });
    }
  }

  updateCliente(): void {
    this.clienteService.update(this.cliente).subscribe({
      next: () => {
        this.clienteService.showMessage('Cliente atualizado com sucesso!');
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