import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exchange-result',
  templateUrl: './exchange-result.component.html',
  styleUrls: ['./exchange-result.component.scss'],
})
export class ExchangeResultComponent implements OnInit {
  cards: boolean = false;
  button: any = document.getElementById('expandButton');

  constructor() {
    /**if (this.button) {
      this.button.addEventListener('click', () => {
        console.log('element clicked');
        this.expand = true;
      });
    }**/
    this.expand;
  }

  expand() {
    this.cards = true;
  }

  ngOnInit(): void {}
}
