import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result = '';

  handleClick(item:any){
    this.result += item;
  }

  handleEqual(){
    this.result = eval(this.result).toFixed(2);
  }

  handleRest(){
    this.result = '';
  }
}
