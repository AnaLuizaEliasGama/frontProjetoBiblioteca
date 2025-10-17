import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro.model';
import { ActivatedRoute, Router } from '@angular/router';

import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro-update',
  templateUrl: './livro-update.component.html',
  styleUrls: ['./livro-update.component.css']
})
export class LivroUpdateComponent implements OnInit {

  livro: Livro = {
    // Inicialize com valores vazios ou default
    titulo: '',
    isbn: '',
    autor: '',
    editora: '',
    id: '', 
    edicao: '',
    idioma: ''
  };

  constructor(
    private livroService: LivroService,
    private router: Router,
    private route: ActivatedRoute // Para pegar o ID da URL
  ) { }

  ngOnInit(): void {
    // 1. PEGAR O ID DA URL E CARREGAR OS DADOS DO LIVRO
    const id = this.route.snapshot.paramMap.get('id');
    this.livroService.readById(id!).subscribe(livro => {
      this.livro = livro;
    });
  }

  // 2. FUNÇÃO DE ATUALIZAÇÃO
  updateLivro(): void {
    this.livroService.update(this.livro).subscribe(() => {
      this.livroService.showMessage('Livro atualizado com sucesso!');
      this.router.navigate(['/livros']);
    });
  }

  cancel(): void {
    this.router.navigate(['/livros']);
  }
}