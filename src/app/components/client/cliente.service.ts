import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = "http://localhost:8080/clientes";

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  // - MÉTODOS DE UTILIDADE -
  showMessage(msg: string, extraClass: string = ''): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: extraClass ? [extraClass] : undefined
    });
  }

  handleError(e: HttpErrorResponse): Observable<never> {
    console.error(e);
    const errorMessage = e.error?.message || 'Ocorreu um erro desconhecido ao processar o Cliente.';
    this.showMessage(errorMessage, 'snackbar-error');
    return throwError(() => new Error(errorMessage));
  }

  // - MÉTODOS CRUD -

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
  readById(id: number): Observable<Cliente> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Cliente>(url).pipe(
      catchError(e => this.handleError(e))
    );
  }

  // 4. UPDATE (PUT)
  update(cliente: Cliente): Observable<Cliente> {
    const url = `${this.baseUrl}/${cliente.id}`;
    return this.http.put<Cliente>(url, cliente).pipe(
      catchError(e => this.handleError(e))
    );
  }

  // 5. DELETE (DELETE)
  delete(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url).pipe(
      catchError(e => this.handleError(e))
    );
  }
}