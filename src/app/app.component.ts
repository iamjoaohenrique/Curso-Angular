import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  xx = 10;
  nome;
  
  show(x){
    this.title=x;
    console.log(x);
  }

  showoutro(y){
    alert(y);
  }

  mostrar()
  {
    console.log(this.nome);
  }

  mudarvalor(){
    this.nome=12344464;
  }

  

}
