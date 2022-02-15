import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-status',
  templateUrl: './card-status.component.html',
  styleUrls: ['./card-status.component.scss']
})
export class CardStatusComponent implements OnInit {

  @Input() quantidade = 0
  @Input() descricao = ''

  constructor() {

  }

  ngOnInit(): void {
  }

}
