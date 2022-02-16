import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IndicacoesService } from '../services/indicacoes.service';

@Component({
  selector: 'app-detalhes-indicacoes',
  templateUrl: './detalhes-indicacoes.component.html',
  styleUrls: ['./detalhes-indicacoes.component.scss']
})
export class DetalhesIndicacoesComponent implements OnInit {

  dadosIndicado: any = {}

  idIndicacao: number = 0

  constructor(private indicacoesService: IndicacoesService, router: ActivatedRoute) {
    const id = router.snapshot.paramMap.get('id') || '';
    this.idIndicacao = parseInt(id);
  }

  ngOnInit(): void {
    this.indicacoesService.obterPorId(this.idIndicacao).subscribe(indicacao => this.dadosIndicado = indicacao)
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

}
