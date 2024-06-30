import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  //styleUrl: './app.component.css'
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'calculator';
  result:string = "";
  
  _add(firstNumber:string, secondNumber:string)
  {
    this.result = (Number(firstNumber) + Number(secondNumber)).toString();
    return this.result;
  }

  subs(firstNumber:string, secondNumber:string)
  {
    this.result = (Number(firstNumber) - Number(secondNumber)).toString();
    return this.result;
  }

  mult(firstNumber:string, secondNumber:string)
  {
    this.result = (Number(firstNumber) * Number(secondNumber)).toString();
    return this.result;
  }
  
  div(firstNumber:string, secondNumber:string)
  {
    this.result = (Number(firstNumber) / Number(secondNumber)).toString();
    return this.result;
  }

}
