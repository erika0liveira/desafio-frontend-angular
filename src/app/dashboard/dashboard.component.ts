import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Indicacao from '../models/indicacao.model';
import { IndicacoesService } from '../services/indicacoes.service';
import { MatDialog } from '@angular/material/dialog'
import { ModalSucessoComponent } from '../modal-sucesso/modal-sucesso.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
},
)
export class DashboardComponent implements OnInit {
  indicacoes = new Array<Indicacao>();

  constructor(private indicacoesService: IndicacoesService, router: Router, private dialog: MatDialog) { 
    const data = router.getCurrentNavigation()
    
    if(data?.extras.state && data?.extras.state['cadastradoComSucesso']) {
      this.abrirModalSucesso()
    } 
   }

  ngOnInit(): void {
    this.indicacoesService.obterIndicacoes().subscribe(indicacoes => this.indicacoes = indicacoes)
  }

  contarStatus(descricao:string):number {
    return this.indicacoes.filter(indicacao => indicacao.status===descricao).length
  }

  abrirModalSucesso() {
    const modalSucesso = this.dialog.open(ModalSucessoComponent, {
      width: '500px',
      height: '320px',
      autoFocus: false
    });

    modalSucesso.afterClosed().subscribe(result => {
    });
  }

}
