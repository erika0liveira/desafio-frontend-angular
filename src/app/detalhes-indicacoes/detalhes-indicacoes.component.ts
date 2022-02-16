import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalhes-indicacoes',
  templateUrl: './detalhes-indicacoes.component.html',
  styleUrls: ['./detalhes-indicacoes.component.scss']
})
export class DetalhesIndicacoesComponent implements OnInit {

  dadosIndicado: any = {}

  constructor(router: Router) {
    const data = router.getCurrentNavigation()
    
    if(data) {
      this.dadosIndicado = data.extras.state
    } 
  }

  ngOnInit(): void {
  }

}
