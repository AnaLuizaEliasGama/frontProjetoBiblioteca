import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  // Ajuste a URL base se o seu backend estiver em uma porta diferente
  baseUrl = "http://localhost:8080/clientes"; 

  constructor(private http: HttpClient) { }

  /**
   * Mostra uma mensagem na UI. (Você deve substituir a lógica console.log/error pelo seu SnackBar)
   */
  showMessage(msg: string, isError: boolean = false): void {
    if (isError) {
      console.error(`ERRO: ${msg}`);
    } else {
      console.log(`SUCESSO: ${msg}`);
    }
    // Substitua o console.log/error pela sua lógica de Notificação/Snackbar
  }

  // --- MÉTODOS CRUD COMPLETOS (Corrigidos para resolver os novos erros) ---

  // 1. CREATE (Chamado em cliente-create.component.ts)
  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.baseUrl, cliente).pipe(
      catchError(e => this.handleError(e))
    );
  }

  // 2. READ ALL (Chamado em cliente-read.component.ts)
  read(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl).pipe(
      catchError(e => this.handleError(e))
    );
  }

  // 3. READ BY ID (Chamado em cliente-update.component.ts)
  readById(id: number): Observable<Cliente> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Cliente>(url).pipe(
      catchError(e => this.handleError(e))
    );
  }
  
  // 4. UPDATE (Chamado em cliente-update.component.ts)
  update(cliente: Cliente): Observable<Cliente> {
    const url = `${this.baseUrl}/${cliente.id}`; 
    return this.http.put<Cliente>(url, cliente).pipe(
      catchError(e => this.handleError(e))
    );
  }

  // 5. DELETE (Chamado em cliente-read.component.ts)
  delete(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url).pipe(
      catchError(e => this.handleError(e))
    );
  }

  /**
   * Trata erros de requisição, incluindo o erro de Concorrência (409)
   */
  handleError(error: any): Observable<any> {
    let errorMessage = 'Ocorreu um erro desconhecido.';

    if (error instanceof HttpErrorResponse) {
      if (error.status === 409) {
        // TRATAMENTO DO ERRO DE CONCORRÊNCIA
        errorMessage = 'Conflito de Atualização! Este registro foi modificado por outro usuário. Por favor, recarregue a página e tente novamente.';
      } else if (error.status === 404) {
        errorMessage = 'Recurso não encontrado.';
      } else {
        errorMessage = `Erro do Servidor (Status ${error.status}): Verifique o console do backend.`;
      }
    }

    this.showMessage(errorMessage, true); 
    return throwError(() => new Error(errorMessage)); 
  }
}