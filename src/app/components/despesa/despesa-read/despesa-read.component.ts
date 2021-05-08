import { DespesasService } from './../../despesas/despesas.service';
import { Despesa } from './../../despesas/despesas.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-despesa-read',
  templateUrl: './despesa-read.component.html',
  styleUrls: ['./despesa-read.component.css']
})
export class DespesaReadComponent implements OnInit {
   
  despesas: Despesa[] = []
  displayedColumns = ['type','description','value','date',]

  constructor(private despesaService: DespesasService) { }

  ngOnInit(): void {
    this.despesaService.read().subscribe(despesas =>{
      this.despesas = despesas
    })
  }

}
