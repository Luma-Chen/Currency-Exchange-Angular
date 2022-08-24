import { Component, OnInit, Input } from '@angular/core';
import { async } from '@angular/core/testing';
import { ApisService } from '../../../apis.service';
import { LoaderComponent } from '../loader/loader.component';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from "ngx-loading";

@Component({
  selector: 'app-exchange-result',
  templateUrl: './exchange-result.component.html',
  styleUrls: ['./exchange-result.component.scss'],
})
export class ExchangeResultComponent implements OnInit {
  @Input() currency:any;
  showCards: boolean = false;
  response:any;
  public loading = false;

  constructor(private apisService: ApisService) {}

  expand() {
    this.showCards = true;
  }

  contract () {
    this.showCards = false;
  }

  async ngOnInit(): Promise<void> {
    this.loading = true;
    await this.apisService.getExchangeRate(this.currency).subscribe(
      (success) => {
        this.response= success;
        console.log(success);
        this.loading = false;
      },
      (erro) => {
        console.log(erro);
        this.loading = false;
      }
    );
  }
}
