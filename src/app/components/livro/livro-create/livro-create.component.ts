import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';


@Component({
  selector: 'app-livro-create',
  templateUrl: './livro-create.component.html',
  styleUrls: ['./livro-create.component.css']
})
export class LivroCreateComponent implements OnInit {

  livro: Livro = {
    titulo: '',
    isbn: '',
    autor: '',
    editora: '',
    id: '',
    edicao: '',
    idioma: ''
  }

  livros: Livro [] = []
  constructor(private livroService: LivroService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.livroService.read().subscribe(livros => {
      this.livros = livros
    })
  }

  createLivro(): void {
    this.livroService.create(this.livro).subscribe(() => {
      this.livroService.showMessage('Livro lindo criado ☻☻')
      this.router.navigate(['/livros'])
    })
  }

  cancel(): void {
    this.router.navigate(['/livros'])
  }
}
