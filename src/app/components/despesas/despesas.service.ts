import { Despesa } from './despesas.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class DespesasService {

  baseUrl = "http://localhost:3001/despesas"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(despesa: Despesa): Observable<Despesa>{
    return this.http.post<Despesa>(this.baseUrl, despesa)
  }

  read(): Observable<Despesa[]>{
    return this.http.get<Despesa[]>(this.baseUrl)
  }

  readById(type: string): Observable<Despesa>{
    const url = `${this.baseUrl}/${type}`
    return this.http.get<Despesa>(url)
  }

  update(despesa: Despesa): Observable<Despesa>{
    const url = `${this.baseUrl}/${despesa.type}`
    return this.http.put<Despesa>(url,despesa)
  }

}
