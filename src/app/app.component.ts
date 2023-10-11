import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini CalculadoraApp';
  
  numero1 : number = 0;
  //segundo ejemplo bien hecho
  numero2 : number = 0;
  resultado : number = 0;

  sumar(): void {

    this.resultado = this.numero1 + this.numero2

  }

  restar(): void {

    this.resultado = this.numero1 - this.numero2

  }

  multiplicar(): void {

    this.resultado = this.numero1 * this.numero2

  }

  dividir(): void {

    this.resultado = this.numero1 / this.numero2

  }

  resetear() : void{
    this.resultado = 0;
    this.numero1 = 0;
    this.numero2 = 0;
  }

}
