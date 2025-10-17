// ARQUIVO: cliente-crud.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // 👈 Adicionar este import!

@Component({
  selector: 'app-cliente-crud',
  templateUrl: './cliente-crud.component.html',
  styleUrls: ['./cliente-crud.component.css']
})
export class ClienteCrudComponent implements OnInit {

  // 1. INJETAR O ROUTER no construtor
  constructor(private router: Router) { } 

  ngOnInit(): void {
  }

  // 2. MÉTODO DE NAVEGAÇÃO
  navigateToClienteCreate(): void {
    // Isso navegará para o componente de criação, que configuraremos na rota
    this.router.navigate(['/clientes/create']); 
  }
}