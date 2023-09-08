import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  constructor (){}

  ngOnInit(): void {
    this.criarPensamento;
  }

  pensamento = {
    id : 1,
    conteudo : 'Desenvolvimento de aplicações front-end com Angular 16',
    autor : 'Jordan Winther',
    modelo : ''

  }

  criarPensamento(){
   
    alert("Testando");
    
  }

}
