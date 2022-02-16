import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardStatusComponent } from './dashboard/card-status/card-status.component';
import { TabelaIndicacoesComponent } from './dashboard/tabela-indicacoes/tabela-indicacoes.component';
import { FormsModule } from '@angular/forms';
import { CadastroIndicacoesComponent } from './cadastro-indicacoes/cadastro-indicacoes.component';
import { DetalhesIndicacoesComponent } from './detalhes-indicacoes/detalhes-indicacoes.component';
import { IndicacoesService } from './services/indicacoes.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalSucessoComponent } from './modal-sucesso/modal-sucesso.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    CardStatusComponent,
    TabelaIndicacoesComponent,
    CadastroIndicacoesComponent,
    DetalhesIndicacoesComponent,
    ModalSucessoComponent,
    
  ],

  entryComponents: [
    ModalSucessoComponent,
  ],
  
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [IndicacoesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
