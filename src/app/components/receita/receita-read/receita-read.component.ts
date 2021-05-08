import { Receita } from './../../receitas/receitas.model';
import { ReceitasService } from './../../receitas/receitas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receita-read',
  templateUrl: './receita-read.component.html',
  styleUrls: ['./receita-read.component.css']
})
export class ReceitaReadComponent implements OnInit {

  receitas: Receita[] = []
  displayedColumns = ['type','description','value','date',]

  constructor(private receitaService: ReceitasService) { }

  ngOnInit(): void {
    this.receitaService.readReceita().subscribe(receitas =>{
      this.receitas = receitas
    })
  }

}
