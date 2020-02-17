import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  meuForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.meuForm = this.formBuilder.group(
      {
        nomeInput: ['algo', []],
        emailInput: ['algo', []],
        senhaInput: ['algo', []],
        cepInput: ['algo', []],
        logInput: ['algo', []],
        logradouroInput:['algo', []],
        numeroInput: ['algo', []],
        complementoInput: ['algo', []],
        cidadeInput: ['algo', []],
        bairroInput: ['algo', []],
        estadoInput: ['algo', []]
      }
    );
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.meuForm);
  }
}
