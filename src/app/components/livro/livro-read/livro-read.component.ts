import { Component, OnInit } from '@angular/core';
import { LivroService } from '../livro.service';
import { Livro } from '../livro.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro-read',
  templateUrl: './livro-read.component.html',
  styleUrls: ['./livro-read.component.css']
})
export class LivroReadComponent implements OnInit {

  // Propriedades mínimas
  livros: Livro[] = [];
  displayedColumns = ['id', 'titulo', 'autor', 'acoes']; // Colunas

  constructor(
    private livroService: LivroService, // Injeção necessária
    private router: Router
  ) { }

  ngOnInit(): void {
    // 1. IMPLEMENTAÇÃO DO READ: Carrega a lista de livros ao iniciar o componente
    this.livroService.read().subscribe(livros => {
      this.livros = livros;
    });
  }

  // 2. IMPLEMENTAÇÃO DO DELETE
  deleteLivro(id: string): void { // O ID é uma string, conforme sua interface
    // Confirmação para evitar exclusão acidental (boa prática)
    if (confirm('Tem certeza que deseja excluir este livro?')) {
        // O seu serviço delete(id) espera 'number', mas o seu modelo 'id' é '""'. 
        // Se a sua API espera um número, você deve converter aqui: +id
        this.livroService.delete(+id).subscribe(() => {
            this.livroService.showMessage('Livro excluído com sucesso! 🗑️');
            // Recarrega a lista após deletar para atualizar a tabela
            this.ngOnInit(); 
        });
    }
  }

  // 3. FUNÇÃO PARA NAVEGAR PARA A TELA de CRIAÇÃO
  navigateToLivroCreate(): void {
    // Corrigi o caminho de navegação. Se sua rota de criação é '/livros/create', use a linha abaixo.
    this.router.navigate(['/livros/create']); 
    // Se for 'livro/create' como está no LivroCrudComponent, use: this.router.navigate(['livro/create']);
  }

  // 4. FUNÇÃO PARA NAVEGAR PARA A TELA de EDIÇÃO (já usada no HTML)
  navigateToLivroUpdate(id: string): void {
    this.router.navigate(['/livros/update', id]);
  }
}