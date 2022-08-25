import { Component, OnInit, Input } from '@angular/core';
import { async } from '@angular/core/testing';
import { ApisService } from '../../../apis.service';
import { LoaderComponent } from '../loader/loader.component';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';

@Component({
  selector: 'app-exchange-result',
  templateUrl: './exchange-result.component.html',
  styleUrls: ['./exchange-result.component.scss'],
})
export class ExchangeResultComponent implements OnInit {
  @Input() currency: any;
  showCards: boolean = false;
  response: any;
  public loading = false;
  lastUpdated: string = '';
  formattedCurrency:string= '';

  constructor(private apisService: ApisService) {}

  expand() {
    this.showCards = true;
  }

  contract() {
    this.showCards = false;
  }

  async ngOnInit(): Promise<void> {
    this.loading = true;
    await this.apisService.getExchangeRate(this.currency).subscribe(
      (success) => {
        this.response = success;
        console.log(success);
        this.lastUpdated = this.formatTime(this.response?.lastUpdatedAt);
        this.formattedCurrency= this.formatCurrency(this.response?.exchangeRate);
        this.loading = false;
      },
      (erro) => {
        console.log(erro);
        alert('Erro no sistema');
        this.loading = false;
      }
    );
  }

  formatTime(lastUpdated: string): string {
    const date = new Date(lastUpdated);
    let hours = date.toLocaleString('pt-BR', { hour: '2-digit' });
    let minutes = date.toLocaleTimeString('pt-BR', { minute: '2-digit' });
    let day = date.toLocaleDateString('pt-BR');
    let time: string = day + ' - ' + hours + 'h' + minutes;
    return time;
  }

  formatCurrency(currency:number):string {
    const formattedCurrency = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(currency);
    return formattedCurrency;
  }
}