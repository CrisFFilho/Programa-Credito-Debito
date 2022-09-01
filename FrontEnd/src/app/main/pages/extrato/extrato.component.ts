import { Component, OnInit } from '@angular/core';

import { IExtrato } from './../../../core/interfaces/extrato.interface';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  listExtratos: IExtrato[] = [
    {
      id: 1,
      descricao: 'Compras do mês',
      tipo: 'Crédito',
      id_usuario: 1,
      usuario: 'Cristian',
      valor: 670.47,
    },
    {
      id: 2,
      descricao: 'sushi',
      tipo: 'Crédito',
      id_usuario: 1,
      usuario: 'Cristian',
      valor: 67.10,
    },
    {
      id: 3,
      descricao: 'Pagando o emprestimo',
      tipo: 'Debito',
      id_usuario: 1,
      usuario: 'Pedro',
      valor: 240.00,
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
