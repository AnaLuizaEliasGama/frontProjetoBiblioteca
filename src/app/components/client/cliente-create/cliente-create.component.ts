// ARQUIVO: cliente-create.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// 1. IMPORTAÇÕES CORRIGIDAS: Agora referenciam a pasta superior (./) 
// onde os arquivos de modelo e serviço estão localizados.
import { ClienteService } from '../cliente.service'; 
import { Cliente } from '../cliente.model';
import { Contato } from '../contato.model'; 
import { Endereco } from '../endereco.model'; 

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  // Inicialização do Objeto Cliente, Contato e Endereco...
  cliente: Cliente = {
    // ...
    cliId: '',
    nome: '',
    cpf: '',
    rg: '',
    dataNascimento: '',
    sexo: '',
    observacoes: '',

    contato: {
      email: '',
      telefone: ''
    } as Contato,

    endereco: {
      cep: '',
      logradouro: '',
      numero: '',
      bairro: '',
      cidade: '',
      estado: '',
      complemento: ''
    } as Endereco
  };

  constructor(
    private clienteService: ClienteService, 
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createCliente(): void {
    this.clienteService.create(this.cliente).subscribe({
      next: () => {
        this.clienteService.showMessage('Cliente cadastrado com sucesso!');
        this.router.navigate(['/clientes']); 
      },
      error: (e: any) => { 
        // Erro é tratado no service
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/clientes']);
  }
}