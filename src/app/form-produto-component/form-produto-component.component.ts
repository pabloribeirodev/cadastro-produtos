import { Observable } from 'rxjs';
import { ProdutoService } from './../servicos/produto.service';
import { Produto } from './../model/Produto';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-produto-component',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './form-produto-component.component.html',
  styleUrl: './form-produto-component.component.scss'
})
export class FormProdutoComponentComponent {

  vetor:Produto[] = [];

  constructor(private servico:ProdutoService){}

  formulario = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl(''),
    valor: new FormControl(null)
  })

// Carregar os produtos assim que o componente for iniciado
ngOnInit(): void {
  this.carregarApi(); 
}

// Método para buscar os produtos na API
carregarApi(): void {
  this.servico.selecionar().subscribe(retorno => {
    this.vetor = retorno; 
  });
}


  cadastrar(){
    this.servico.cadastrar(this.formulario.value as Produto).subscribe(retorno => {
      this.vetor.push(retorno);
      this.formulario.reset();
    })
  }
}
