import { Component, ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexXAxis,
  ApexPlotOptions,
  ApexTooltip
} from "ng-apexcharts";

import { Despesa } from "../../despesas/despesas.model";
import { DespesasService } from "../../despesas/despesas.service";
import { Receita } from "../../receitas/receitas.model";
import { ReceitasService } from "../../receitas/receitas.service";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  tooltip: ApexTooltip;
  colors: string[];
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
};

@Component({
  selector: 'app-grafico-categorias',
  templateUrl: './grafico-categorias.component.html',
  styleUrls: ['./grafico-categorias.component.css']
})

export class GraficoCategoriasComponent {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(private receitasService: ReceitasService, private despesasService: DespesasService) {
    this.chartOptions = {
      series: [
        {
          data: [0,0,0]
        }
      ],
      chart: {
        type: "bar",
        height: 500,
        width: 616
      },
      plotOptions: {
        bar: {
          barHeight: "100%",
          distributed: true,
          dataLabels: {
            position: "bottom"
          }
        }
      },
      colors: [
        "#90ee7e",
        "#f48024",
        "#69d2e7"
      ],
      dataLabels: {
        enabled: true,
        textAnchor: "start",
        style: {
          colors: ["#fff"]
        },
        offsetX: 0,
        dropShadow: {
          enabled: true
        }
      },
      stroke: {
        width: 1,
        colors: ["#fff"]
      },
      xaxis: {
        categories: [
          "Receita",
          "Balanço",
          "Despesas"
        ]
      },
      yaxis: {
        labels: {
          show: true
        }
      },
      title: {
        text: "Gráfico de Categorias",
        align: "center",
        floating: true
      },
      subtitle: {
        text: "Valores por categoria",
        align: "center"
      },
      tooltip: {
        theme: "dark",
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function() {
              return "";
            }
          }
        }
      }
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

    this.chartOptions.series = [{
      name: "Valor",
      data: [this.receitaTotal, this.balancoTotal ,this.despesaTotal]
    }] 

  }

}
