import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  meuForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.meuForm = this.formBuilder.group(
      {
        emailInput: ['algo', []],
        senhaInput: ['algo', []]
      }
    );
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.meuForm);
  }
}
