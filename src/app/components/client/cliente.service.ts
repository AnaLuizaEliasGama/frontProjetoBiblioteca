// src/app/services/cliente.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = "http://localhost:8080/clientes";

  constructor(private http: HttpClient) { }

  showMessage(msg: string): void {
    console.log(msg); // Simplificado
  }

  handleError(e: any): Observable<any> {
    console.error(e);
    return new Observable();
  }

  // CREATE
  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.baseUrl, cliente);
  }

  // READ ALL
  read(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl);
  }

  // READ BY ID
  readById(id: string): Observable<Cliente> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Cliente>(url);
  }

  // UPDATE
  update(cliente: Cliente): Observable<Cliente> {
    const url = `${this.baseUrl}/${cliente.cliId}`;
    return this.http.put<Cliente>(url, cliente);
  }

  // DELETE
  delete(cliId: string): Observable<void> {  // ✅ Agora recebe string
    const url = `${this.baseUrl}/${cliId}`;
    return this.http.delete<void>(url);
  }
}