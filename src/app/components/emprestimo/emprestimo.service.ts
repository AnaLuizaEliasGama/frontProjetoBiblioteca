import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Emprestimo } from './emprestimo.model';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {

  // URL base do recurso no seu backend (exemplo)
  baseUrl = "http://localhost:8080/api/emprestimos"; 

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, extraClass: string = ''): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: extraClass ? [extraClass] : undefined // Aplica a classe CSS
    });
  }

  // MÉTODO CREATE CORRIGIDO/ADICIONADO
  create(emprestimo: Emprestimo): Observable<Emprestimo> {
    return this.http.post<Emprestimo>(this.baseUrl, emprestimo);
  }

  // MÉTODO READ CORRIGIDO
  read(): Observable<Emprestimo[]> {
    // Agora retorna Observable<Emprestimo[]>
    return this.http.get<Emprestimo[]>(this.baseUrl); 
  }

  // MÉTODO READ BY ID (Já estava correto)
  readById(id: string | number): Observable<Emprestimo> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Emprestimo>(url);
  }

  // MÉTODO UPDATE (Já estava correto)
  update(emprestimo: Emprestimo): Observable<Emprestimo> {
    const url = `${this.baseUrl}/${emprestimo.id}`;
    return this.http.put<Emprestimo>(url, emprestimo);
  }
  
  // MÉTODO DELETE (Adicionado para completar o CRUD)
  delete(id: number): Observable<Emprestimo> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Emprestimo>(url);
  }
}