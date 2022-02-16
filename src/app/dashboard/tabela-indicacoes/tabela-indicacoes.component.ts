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

  constructor(private indicacoesService: IndicacoesService) { }

  ngOnInit(): void {        
  }

  obterQuantidadePagina() {

    let tamanho = this.valoresTabela.length / this.maximoPagina

    if(tamanho % 1 > 0) {
      return parseInt(tamanho.toFixed(0))+1
      
    } else {
      return parseInt(tamanho.toFixed(0))
    }
    
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

  mudarPagina(numeroPagina: number) {
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
