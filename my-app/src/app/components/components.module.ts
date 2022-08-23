import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { ExchangeResultComponent } from './exchange-result/exchange-result.component';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [
    FooterComponent,
    ExchangeResultComponent,
    CardsComponent
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
