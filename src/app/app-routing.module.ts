import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CadastroIndicacoesComponent } from './cadastro-indicacoes/cadastro-indicacoes.component';
import { DetalhesIndicacoesComponent } from './detalhes-indicacoes/detalhes-indicacoes.component'

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path:'',
    pathMatch: 'prefix',
    redirectTo: 'dashboard'
  },
  {
    path:'cadastro-indicacoes',
    component: CadastroIndicacoesComponent
  },
  {
    path: 'detalhes-indicacoes',
    component: DetalhesIndicacoesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
