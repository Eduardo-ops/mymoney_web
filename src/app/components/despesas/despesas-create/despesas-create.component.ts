
import { Despesa } from './../despesas.model';
import { DespesasService } from './../despesas.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-despesas-create',
  templateUrl: './despesas-create.component.html',
  styleUrls: ['./despesas-create.component.css']
})
export class DespesasCreateComponent implements OnInit {

  despesa: Despesa = {
    type: '',
    description: '',
    value: 0.0,
    date: ''
  }
  
  constructor(private despesasService: DespesasService, private router: Router) { }

  ngOnInit(): void {

  }

  createDespesa(): void {
    this.despesasService.create(this.despesa).subscribe(() => {
      this.router.navigate(['/despesas'])
    })

    this.despesasService.showMessage('Despesa cadastrada!')
  }

  cancel(): void {
    this.router.navigate(['/despesas'])
  }

}