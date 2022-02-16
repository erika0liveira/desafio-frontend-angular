import { Component, Injectable, OnInit } from '@angular/core';
import { IndicacoesService } from '../services/indicacoes.service';
import Indicacao from '../models/indicacao.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-indicacoes',
  templateUrl: './cadastro-indicacoes.component.html',
  styleUrls: ['./cadastro-indicacoes.component.scss']
})
export class CadastroIndicacoesComponent implements OnInit {

  indicacao:Indicacao = {}
  
  constructor(private indicacoesService: IndicacoesService, private router: Router) { }

  salvar(){
    this.indicacoesService.cadastrar(this.indicacao).subscribe(_ => {
      this.router.navigate(["../dashboard"], {state:{cadastradoComSucesso:true}})
    })
  }

  ngOnInit(): void {
  }


}
