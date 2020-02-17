import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-erros',
  templateUrl: './show-erros.component.html',
  styleUrls: ['./show-erros.component.css']
})
export class ShowErrosComponent implements OnInit {

  constructor() { }

  @Input() mensagem;
  @Input() isErrorFilho;

  ngOnInit(): void {
  }

}
