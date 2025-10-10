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
  displayedColumns = ['id', 'titulo', 'autor', 'acoes']; // Colunas mínimas

  constructor(
    private livroService: LivroService, // Injeção necessária
    private router: Router
  ) { }

  ngOnInit(): void {
    // Deixado vazio para não fazer requisições por enquanto
  }

  // Função vazia para navegar para a tela de criação (apenas para referência)
  navigateToLivroCreate(): void {
    // this.router.navigate(['/livros/create']);
  }
}