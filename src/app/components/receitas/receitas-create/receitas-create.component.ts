
import { Receita } from './../receitas.model';
import { ReceitasService } from './../receitas.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receitas-create',
  templateUrl: './receitas-create.component.html',
  styleUrls: ['./receitas-create.component.css']
})
export class ReceitasCreateComponent implements OnInit {

  receita: Receita = {
    type: '',
    description: '',
    value: 0.0,
    date: ''
  }
  
  constructor(private receitasService: ReceitasService, private router: Router) { }

  ngOnInit(): void {

  }

  createReceita(): void {
    this.receitasService.createReceita(this.receita).subscribe(() => {
      this.router.navigate(['/receitas'])
    })

    this.receitasService.showMessageReceita('Receita cadastrada!')
  }

  cancelReceita(): void {
    this.router.navigate(['/receitas'])
  }

}
