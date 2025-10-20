// ARQUIVO: cliente-create.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// 1. IMPORTAÇÕES CORRIGIDAS
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

    // ==========================================================
    // 1. DECLARAÇÃO DE PROPRIEDADES (Atributos da Classe)
    // ==========================================================
    // Inicialização do Objeto Cliente, Contato e Endereco...
    cliente: Cliente = {
        // Campos Primitivos
        nome: '',
        cpf: '',
        rg: '',
        dataNascimento: '',
        sexo: '',
        observacoes: '',

        // Relacionamentos
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


    // ==========================================================
    // 2. CONSTRUTOR (Injeção de Dependências)
    // ==========================================================
    constructor(
        private clienteService: ClienteService,
        private router: Router
    ) { }


    // ==========================================================
    // 3. CICLO DE VIDA
    // ==========================================================
    ngOnInit(): void {
    }


    // ==========================================================
    // 4. MÉTODOS CUSTOMIZADOS
    // ==========================================================

    /**
     * Envia os dados do novo cliente para o backend.
     */
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

    /**
     * Cancela a operação e navega de volta para a lista de clientes.
     */
    cancel(): void {
        this.router.navigate(['/clientes']);
    }
}