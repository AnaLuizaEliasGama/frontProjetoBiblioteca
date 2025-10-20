// ARQUIVO: cliente-crud.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // 👈 Importar o Router

@Component({
  selector: 'app-cliente-crud',
  templateUrl: './cliente-crud.component.html',
  styleUrls: ['./cliente-crud.component.css']
})
export class ClienteCrudComponent implements OnInit {

  // 1. INJETAR O ROUTER (e torná-lo público ou exposto para uso no template)
  constructor(public router: Router) { } // 👈 Tornar público para usar no template

  ngOnInit(): void {
  }

  // 2. MÉTODO DE NAVEGAÇÃO
  navigateToClienteCreate(): void {
    // Isso navegará para o componente de criação, que será renderizado no <router-outlet>
    this.router.navigate(['/clientes/create']);
  }
}