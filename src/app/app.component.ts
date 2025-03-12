import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormProdutoComponentComponent } from "./form-produto-component/form-produto-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormProdutoComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cadastrando-produtos';
}
