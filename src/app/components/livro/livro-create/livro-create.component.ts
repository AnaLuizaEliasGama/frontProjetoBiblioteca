import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-livro-create',
  templateUrl: './livro-create.component.html',
  styleUrls: ['./livro-create.component.css']
})
export class LivroCreateComponent implements OnInit {

  livro: Livro = {
    titulo:'',
    isbn:'',
    autor: '', 
    editora: '', 
  }
  constructor(private livrosService: livrosService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
