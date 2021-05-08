import { ReceitasComponent } from './views/receitas/receitas.component';
import { ReceitasCreateComponent } from './components/receitas/receitas-create/receitas-create.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./views/home/home.component";
import { DespesasComponent } from './views/despesas/despesas.component';
import { DespesasCreateComponent } from './components/despesas/despesas-create/despesas-create.component';

const routes: Routes = [
  {
  path:"",
  component: HomeComponent
},{
  path:"despesas",
  component: DespesasComponent
},{
  path: "despesas/create",
  component: DespesasCreateComponent
},{
  path:"receitas",
  component: ReceitasComponent
},{
  path: "receitas/create",
  component: ReceitasCreateComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
