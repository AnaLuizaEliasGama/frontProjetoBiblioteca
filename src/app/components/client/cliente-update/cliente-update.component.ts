// ARQUIVO: cliente-update.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; // 👈 Importar ActivatedRoute
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente.model';
import { Contato } from '../contato.model'; 
import { Endereco } from '../endereco.model'; 

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {

  cliente: Cliente = {
    // Inicialização padrão (será preenchida pelo readById)
    cliId: '', nome: '', cpf: '', rg: '', dataNascimento: '', sexo: '', observacoes: '',
    contato: {} as Contato,
    endereco: {} as Endereco
  };
  
  constructor(
    private clienteService: ClienteService, 
    private router: Router,
    private route: ActivatedRoute // 👈 Injetar ActivatedRoute
  ) { }

  ngOnInit(): void {
    // 1. Obter o 'id' da URL
    const id = this.route.snapshot.paramMap.get('id');

    // 2. Chamar o serviço para carregar os dados
    if (id) {
      this.clienteService.readById(id).subscribe(cliente => {
        this.cliente = cliente;
        
        // CORREÇÃO DE DATA:
        // O campo dataNascimento é uma string no formato "yyyy-MM-dd" que
        // precisa ser formatado para o <input type="date"> aceitar.
        if (this.cliente.dataNascimento) {
            // O backend deve retornar no formato ISO (yyyy-MM-dd), se não, 
            // você precisará fazer uma formatação extra. Assumiremos que está correto.
            this.cliente.dataNascimento = this.cliente.dataNascimento.substring(0, 10);
        }
      });
    } else {
      this.router.navigate(['/clientes']); // Se não tiver ID, volta para a lista
    }
  }

  updateCliente(): void {
    this.clienteService.update(this.cliente).subscribe({
      next: () => {
        this.clienteService.showMessage('Cliente atualizado com sucesso!');
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