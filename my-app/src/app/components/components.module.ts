import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { ExchangeResultComponent } from './exchange-result/exchange-result.component';
import { CardsComponent } from './cards/cards.component';
import { LoaderComponent } from './loader/loader.component';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from "ngx-loading";

@NgModule({
  declarations: [
    FooterComponent,
    ExchangeResultComponent,
    CardsComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxLoadingModule.forRoot({fullScreenBackdrop: true})
  ],
  exports: [
    FooterComponent,
    ExchangeResultComponent,
    LoaderComponent
  ]
})
export class ComponentsModule {}