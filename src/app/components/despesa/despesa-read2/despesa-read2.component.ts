import { Despesa } from './../../despesas/despesas.model';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DespesaRead2DataSource } from './despesa-read2-datasource';

@Component({
  selector: 'app-despesa-read2',
  templateUrl: './despesa-read2.component.html',
  styleUrls: ['./despesa-read2.component.css']
})
export class DespesaRead2Component implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Despesa>;
  dataSource: DespesaRead2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['type', 'description'];

  constructor() {
    this.dataSource = new DespesaRead2DataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
