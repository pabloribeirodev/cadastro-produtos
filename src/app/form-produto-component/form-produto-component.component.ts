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

 
  formulario = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl(''),
    valor: new FormControl(null)
  })
}
