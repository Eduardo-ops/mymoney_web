
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavegacaoComponent } from './components/template/navegacao/navegacao.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { DespesasComponent } from './views/despesas/despesas.component';
import { DespesasCreateComponent } from './components/despesas/despesas-create/despesas-create.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DespesaReadComponent } from './components/despesa/despesa-read/despesa-read.component';
import { DespesaRead2Component } from './components/despesa/despesa-read2/despesa-read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ReceitasComponent } from './views/receitas/receitas.component';
import { ReceitasCreateComponent } from './components/receitas/receitas-create/receitas-create.component';
import { ReceitaReadComponent } from './components/receita/receita-read/receita-read.component';
import { GraficoCategoriasComponent } from './components/graficos/grafico-categorias/grafico-categorias.component';
import { GraficoBalancoComponent } from './components/graficos/grafico-balanco/grafico-balanco.component';
import { NgApexchartsModule  } from 'ng-apexcharts';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavegacaoComponent,
    HomeComponent,
    DespesasComponent,
    DespesasCreateComponent,
    DespesaReadComponent,
    DespesaRead2Component,
    ReceitasComponent,
    ReceitaReadComponent,
    ReceitasCreateComponent,
    GraficoCategoriasComponent,
    GraficoBalancoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
