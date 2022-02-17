import { Component, Input, OnInit } from '@angular/core';
import Indicacao from 'src/app/models/indicacao.model';
import { IndicacoesService } from 'src/app/services/indicacoes.service';

@Component({
  selector: 'app-tabela-indicacoes',
  templateUrl: './tabela-indicacoes.component.html',
  styleUrls: ['./tabela-indicacoes.component.scss']
})

export class TabelaIndicacoesComponent implements OnInit {

  @Input()
  valoresTabela = new Array<Indicacao>();

  maximoPagina = 5
  numeroPaginaAtual = 0
  maximoPaginacao = 3

  constructor(private indicacoesService: IndicacoesService) { }

  ngOnInit(): void {        
  }

  obterQuantidadePagina() {
    let quantidade = this.valoresTabela.length / this.maximoPagina
    return Math.ceil(quantidade)
  
  }

  obterPaginas() {
    const quantidadePaginacao = []
    for (let i = 0; i < this.obterQuantidadePagina(); i++) {
      quantidadePaginacao.push(i + 1)
    }
    
    let primeiroIndice = this.numeroPaginaAtual-1;
    let maximoIndice = primeiroIndice + 3;
    
    if (quantidadePaginacao.length > this.maximoPagina) {
      for (let i = 0; i < this.obterQuantidadePagina(); i++) {
        if (i === maximoIndice) {
          primeiroIndice++;
          maximoIndice += 1;
          return quantidadePaginacao.slice(primeiroIndice, maximoIndice)
        }
      }
    }
    return quantidadePaginacao.slice(primeiroIndice, maximoIndice)
  }
 
  obterPaginaAtual() {
    let indexInicio = this.numeroPaginaAtual * this.maximoPagina
    let indexFim = indexInicio + this.maximoPagina

    return this.valoresTabela.slice(indexInicio, indexFim)
  }

  obterClasseStatus(status:string): string {
    switch(status) {
      case "proposta fechada": return "proposta-fechada"
      case "sem corretor": return "sem-corretor"
      case "em andamento": return "em-andamento"
      case "em negociação": return "em-negociacao"
      default: return ""
    }
  }

  exibirPaginacao() {
    let i = 0
    let exibicao:any = []

    for(i=0; i<this.maximoPaginacao; i++) {
      exibicao.push(this.obterPaginas()[i])
    }

    if(this.obterQuantidadePagina()-1 - this.numeroPaginaAtual < 3) {     
      return exibicao
    } else {
      exibicao.push("...", this.obterQuantidadePagina())
      return exibicao
    }   
  }

  mudarPagina(numeroPagina: any) {
    if(numeroPagina === "...") {
      return
    }
    this.numeroPaginaAtual = numeroPagina - 1
  }

  mudarPaginaDireita(numeroPagina: number) {
    this.numeroPaginaAtual = numeroPagina + 1
  }

  mudarPaginaInicio() {
    this.numeroPaginaAtual = 0
  }

  mudarPaginaFinal(numeroPaginaAtual: number) {
    this.numeroPaginaAtual = this.obterQuantidadePagina()-1
  }

  excluirIndicacao(id?: number) {
    if(!id) {
      return
    }

    this.indicacoesService.deletar(id).subscribe(_ => {
      this.valoresTabela = this.valoresTabela.filter(valor => valor.id !== id)
    })
  }
}
