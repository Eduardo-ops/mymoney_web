import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.css']
})
export class DespesasComponent implements OnInit {

  constructor( private router : Router) { }

  ngOnInit(): void {
  }

  navigateToDespesasCreate(): void {
    this.router.navigate(['despesas/create'])
  }

}
