import { Component, Input, ViewChild } from '@angular/core';
import { ApexTitleSubtitle, ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexFill,
  ApexDataLabels,
  ApexLegend
} from "ng-apexcharts";
import { Despesa } from '../../despesas/despesas.model';
import { DespesasService } from '../../despesas/despesas.service';
import { Receita } from '../../receitas/receitas.model';
import { ReceitasService } from '../../receitas/receitas.service';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  fill: ApexFill;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'app-grafico-balanco',
  templateUrl: './grafico-balanco.component.html',
  styleUrls: ['./grafico-balanco.component.css']
})
export class GraficoBalancoComponent {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(private receitasService: ReceitasService, private despesasService: DespesasService) {
    this.chartOptions = {
      series: [0,0],
      chart: {
        width: 570,
        type: "donut"
      },
      labels: ["Despesas", "Balanço"],
      dataLabels: {
        enabled: true
      },
      fill: {
        type: "gradient"
      },
      title: {
        text: "Favourite Movie Type"
      },
      legend: {
        formatter: function(val, opts) {
          return val + " - " + opts.w.globals.series[opts.seriesIndex];
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  despesas: Despesa [] = []
  receitas: Receita[] = []
  receitaTotal: number = 0
  despesaTotal: number = 0
  balancoTotal: number = 0

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

    this.chartOptions.series = [this.despesaTotal,this.balancoTotal]

  }
}
