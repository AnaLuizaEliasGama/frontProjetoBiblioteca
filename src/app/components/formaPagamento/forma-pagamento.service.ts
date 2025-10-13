import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { FormaPagamento } from './FormaPagamento.model';


@Injectable({
  providedIn: 'root'
})
export class FormaPagamentoService {

  baseUrl = "http://localhost:8080/pagamentos";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  create(pagamento: FormaPagamento): Observable<FormaPagamento> {
    return this.http.post<FormaPagamento>(this.baseUrl, pagamento);
  }

  read(): Observable<FormaPagamento[]> {
    return this.http.get<FormaPagamento[]>(this.baseUrl);
  }

  readById(id: string): Observable<FormaPagamento> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<FormaPagamento>(url);
  }

  update(pagamento: FormaPagamento): Observable<FormaPagamento> {
    const url = `${this.baseUrl}/${pagamento.id}`;
    return this.http.put<FormaPagamento>(url, pagamento);
  }

  getById(id: number): Observable<FormaPagamento> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<FormaPagamento>(url);
  }

  delete(fpgId: number): Observable<FormaPagamento> {
    const url = `${this.baseUrl}/${fpgId}`;
    return this.http.delete<FormaPagamento>(url);
  }
}
