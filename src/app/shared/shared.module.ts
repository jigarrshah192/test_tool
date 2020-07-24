import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { CrudService } from './services/crud.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputNumberModule,
    InputTextModule,
    InputTextareaModule,
    TableModule,
    ButtonModule,
    PanelModule
  ],
  exports: [
    InputNumberModule,
    InputTextModule,
    InputTextareaModule,
    TableModule,
    ButtonModule,
    PanelModule
  ],
  providers: [CrudService]
})
export class SharedModule { }
