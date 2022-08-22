import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { ExchangeResultComponent } from './exchange-result/exchange-result.component';

@NgModule({
  declarations: [
    FooterComponent,
    ExchangeResultComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    FooterComponent,
    ExchangeResultComponent
  ]
})
export class ComponentsModule {}
