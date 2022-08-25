import { Component, OnInit, Input } from '@angular/core';
import { async } from '@angular/core/testing';
import { ApisService } from '../../../apis.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  @Input() currency: any;
  public loading = false;
  cards: any;
  data: DailyExchange[]= [];
  days:string[]= [];

  constructor(private apisService: ApisService) {}

  ngOnInit(): void {
    this.loading = true;
    this.apisService.getDailyExchangeRate(this.currency).subscribe(
      (success) => {
        this.cards = success;
        for (let i = 0; i < 23; i++) {
          let diffPre;
          let diffPos;
          if (this.cards?.data[i]) {
            if (i % 2 == 0){
              diffPre= this.cards?.data[i]?.close;
            }
            if (i % 2 == 1) {
              diffPos= this.cards?.data[i]?.close;
            }
            this.data.push({
              close: this.cards?.data[i]?.close,
              date: this.formatDay(this.cards?.data[i]?.date),
              high: this.cards?.data[i]?.high,
              low: this.cards?.data[i]?.low,
              open: this.cards?.data[i]?.open,
              closeDiff: this.calcCloseDiff(diffPre, diffPos)
            });
          }
        }
        console.log('Data');
        console.log(this.data);
        this.loading = false;
      },
      (erro) => {
        console.log(erro);
        alert('Erro no sistema');
        this.loading = false;
      }
    );
  }

  calcCloseDiff(diffPre:number, diffPos:number) {
    let closeDiff= diffPre/diffPos;
    return closeDiff;
  }

  formatDay(date:string) {
    const day= new Date(date);
    const dayMonth:string= day.toLocaleDateString();
    return dayMonth;
  }
}

export type DailyExchange = {
  close: number;
  date: string;
  high: number;
  low: number;
  open: number;
  closeDiff: number;
};