// ARQUIVO: cliente.service.ts (Versão Final Limpa)
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = "http://localhost:8080/api/clientes"; 

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

// --- MÉTODOS DE UTILIDADE ---

  showMessage(msg: string, extraClass: string = ''): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: extraClass ? [extraClass] : undefined
    });
  }

  handleError(e: any): Observable<any> {
    console.error(e);
    const errorMessage = e.error?.message || 'Ocorreu um erro desconhecido ao processar o Cliente.';
    this.showMessage(errorMessage, 'snackbar-error');
    return EMPTY;
  }
  
// --- MÉTODOS CRUD ---

  // 1. CREATE (POST)
  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.baseUrl, cliente).pipe(
      catchError(e => this.handleError(e))
    );
  }

  // 2. READ ALL (GET)
  read(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl).pipe( 
      catchError(e => this.handleError(e))
    );
  }
  
  // 3. READ BY ID (GET /:id)
  readById(id: string | number): Observable<Cliente> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Cliente>(url).pipe(
      catchError(e => this.handleError(e))
    );
  }
  
  // 4. UPDATE (PUT /:id)
  update(cliente: Cliente): Observable<Cliente> {
    const url = `${this.baseUrl}/${cliente.id}`; 
    return this.http.put<Cliente>(url, cliente).pipe(
      catchError(e => this.handleError(e))
    );
  }
  
  // 5. DELETE (DELETE /:id)
  delete(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url).pipe(
      catchError(e => this.handleError(e))
    );
  }
}