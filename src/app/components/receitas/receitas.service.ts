import { Receita } from './receitas.model';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })

  export class ReceitasService {

    baseUrl = "http://localhost:3001/receitas"
  
    constructor(private snackBarReceita: MatSnackBar, private http: HttpClient) { }
  
    showMessageReceita(msg: string): void {
      this.snackBarReceita.open(msg, 'X', {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top"
      })
    }
  
    createReceita(receita: Receita): Observable<Receita>{
      return this.http.post<Receita>(this.baseUrl, receita)
    }
  
    readReceita(): Observable<Receita[]>{
      return this.http.get<Receita[]>(this.baseUrl)
    }
  
    readByIdReceita(type: string): Observable<Receita>{
      const url = `${this.baseUrl}/${type}`
      return this.http.get<Receita>(url)
    }
  
    updateReceita(receita: Receita): Observable<Receita>{
      const url = `${this.baseUrl}/${receita.type}`
      return this.http.put<Receita>(url,receita)
    }
  
  }

