import { Receita } from './../../components/receitas/receitas.model';
import { Component, OnInit, Output } from '@angular/core';
import { Despesa } from 'src/app/components/despesas/despesas.model';
import { DespesasService } from 'src/app/components/despesas/despesas.service';
import { ReceitasService } from 'src/app/components/receitas/receitas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  despesas: Despesa [] = []
  receitas: Receita[] = []
  receitaTotal: number = 0
  despesaTotal: number = 0
  balancoTotal: number = 0

  constructor(private receitasService: ReceitasService, private despesasService: DespesasService,) { }

  ngOnInit(): void {
    this.buscaSaldo()
    setInterval(() => this.buscaSaldo(), 1000)
  }
  
  buscaSaldo(){
    this.receitasService.readReceita().subscribe(receita => {
      this.receitas = receita
    })
    
    this.despesasService.read().subscribe(despesa => {
      this.despesas = despesa
    })
    this.valorAtual()
  }

  valorAtual(){ 

    this.receitaTotal = 0
    this.despesaTotal = 0
    this.balancoTotal = 0

    for(let i = 0; i < this.receitas.length;i++){
      this.receitaTotal = ((this.receitaTotal + this.receitas[i].value) * 100) / 100
    }

    for(let i = 0; i < this.despesas.length;i++){
      this.despesaTotal = ((this.despesaTotal + this.despesas[i].value) * 100) / 100
    }
    
    this.balancoTotal = this.receitaTotal - this.despesaTotal
    this.balancoTotal = parseFloat(this.balancoTotal.toFixed(2))

  }
}
