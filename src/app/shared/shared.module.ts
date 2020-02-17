import { ShowErrosComponent } from './messages/show-erros/show-erros.component';
import { DebugFormComponent } from './messages/debug-form/debug-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebugCampoComponent } from './messages/debug-campo/debug-campo.component';




@NgModule({
  declarations: [
    DebugFormComponent,
    DebugCampoComponent,
    ShowErrosComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DebugFormComponent,
    ShowErrosComponent,
    DebugCampoComponent

  ]
})
export class SharedModule { }
