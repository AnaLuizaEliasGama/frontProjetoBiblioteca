import { FornecedorService } from './../fornecedor.service';
import { Fornecedor } from './../fornecedor.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// Import 'Route' não é necessário aqui, removido.

@Component({
  selector: 'app-fornecedor-update',
  templateUrl: './fornecedor-update.component.html',
  styleUrls: ['./fornecedor-update.component.css']
})
export class FornecedorUpdateComponent implements OnInit {

  // É bom inicializar a propriedade, ou usar o operador '!' se tiver certeza
  // que ela será inicializada no ngOnInit. Vou usar o '!' como no modelo.
  fornecedor!: Fornecedor; 

  constructor(
    // Corrigido para 'fornecedorService' com 'f' minúsculo para seguir 
    // a convenção de nomenclatura de variáveis/serviços privados no Angular
    private fornecedorService: FornecedorService,
    private router: Router, 
    private route: ActivatedRoute
  ) { } // O construtor estava com ' ) { }' extra e incorreto antes.

  ngOnInit(): void {
    // Corrigido o erro de digitação: 'snaphot' para 'snapshot'
    const forId = this.route.snapshot.paramMap.get('forId');
    
    // Corrigida a sintaxe do subscribe (parênteses e chaves)
    this.fornecedorService.readById(forId!).subscribe((fornecedor: Fornecedor) => {
      // Atribuindo o fornecedor retornado (minúsculo) à propriedade da classe (minúsculo)
      this.fornecedor = fornecedor;
    });
  }

  // ---

  /**
   * Método para atualizar o fornecedor.
   * Baseado no 'updateProduct()' do componente modelo.
   */
  updateFornecedor(): void {
    this.fornecedorService.update(this.fornecedor).subscribe(() => {
      // Assumindo que o FornecedorService tem um método 'showMessage' como o ProductService
      this.fornecedorService.showMessage('Fornecedor atualizado com sucesso!');
      this.router.navigate(['/fornecedores']); // Redireciona para a lista de fornecedores
    });
  }

  /**
   * Método para cancelar a edição e navegar de volta.
   * Baseado no 'cancel()' do componente modelo.
   */
  cancel(): void {
    this.router.navigate(['/fornecedores']); // Redireciona para a lista de fornecedores
  }
}