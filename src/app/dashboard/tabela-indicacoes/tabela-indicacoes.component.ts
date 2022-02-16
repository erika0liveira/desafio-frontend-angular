import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela-indicacoes',
  templateUrl: './tabela-indicacoes.component.html',
  styleUrls: ['./tabela-indicacoes.component.scss']
})

export class TabelaIndicacoesComponent implements OnInit {

  valoresTabela = [
    {
      check: false,
      nome: "rafaela oliva assunção vieira",
      corretor: "rafaela oliva assunção vieira",
      status: "proposta fechada",
      telefone: "21999999999",
      email: "a@email.com",
      empresa: "xyz"
    },
    {
      check: false,
      nome: "nome do lead sobrenome 2",
      corretor: "-",
      status: "sem corretor",
      telefone: "11888888888",
      email: "b@email.com.br",
      empresa: ""
    },
    {
      check: false,
      nome: "nome do lead sobrenome 3",
      corretor: "-",
      status: "sem corretor",
      telefone: "45777777777",
      email: "c@email.com.br",
      empresa: "jkl"
    },
    {
      check: false,
      nome: "nome do lead sobrenome 4",
      corretor: "-",
      status: "sem corretor",
      telefone: "12666666666",
      email: "d@email.com.br",
      empresa: ""
    },
    {
      check: false,
      nome: "nome do lead sobrenome 5",
      corretor: "-",
      status: "sem corretor",
      telefone: "58555555555",
      email: "e@email.com.br",
      empresa: "asd"
    },
    
  ]

  maximoPagina = 5
  numeroPaginaAtual = 0

  quantidadePagina = this.valoresTabela.length / this.maximoPagina

  constructor() { }

  ngOnInit(): void {
  }

  obterPaginas() {
    const quantidadePaginacao = []
    for(let i = 0; i < this.quantidadePagina; i++) {
      quantidadePaginacao.push(i+1)
    }
    return quantidadePaginacao
  }

  obterQuantidadePaginas() {
    return this.valoresTabela.length / this.maximoPagina
  }
  
  obterPaginaAtual() {
    let indexInicio = this.numeroPaginaAtual * this.maximoPagina
    let indexFim = indexInicio + this.maximoPagina

    return this.valoresTabela.slice(indexInicio, indexFim)
  }

  mudarPagina(numeroPagina:number) {
    this.numeroPaginaAtual = numeroPagina-1
  }

  mudarPaginaDireita(numeroPagina:number) {
    this.numeroPaginaAtual = numeroPagina+1
  }

  mudarPaginaInicio(){
    this.numeroPaginaAtual = 0
  }

  mudarPaginaFinal(numeroPaginaAtual:number) {
    this.numeroPaginaAtual = this.obterQuantidadePaginas()-1
  }
}
