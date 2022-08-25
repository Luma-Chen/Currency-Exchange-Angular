import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LoaderComponent } from './app/components/loader/loader.component';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';

const baseUrl = "https://api-brl-exchange.actionlabs.com.br/api/1.0";
@Injectable({
  providedIn: 'root'
})

export class ApisService {
  public loading = false;

  constructor(
    private http: HttpClient
  ) {}

  getExchangeRate(fromSymbol:string){
    return this.http.get(baseUrl + "/open/currentExchangeRate?apiKey=RVZG0GHEV2KORLNA&from_symbol=" + fromSymbol + "&to_symbol=BRL");
  } 

  getDailyExchangeRate(fromSymbol:string) {
    return this.http.get(baseUrl + "/open/dailyExchangeRate?apiKey=RVZG0GHEV2KORLNA&from_symbol=" + fromSymbol + "&to_symbol=BRL");
  }

  getDailyExchange(fromSymbol:string) {
    this.loading = true;
    let response:any;
    this.getDailyExchangeRate(fromSymbol).subscribe(
     success =>{
      console.log("Daily Exchange");
         console.log(success);
         this.loading = false;
     },
     error =>{
         console.log(error);
         this.loading = false;
     }
    ) 
  }
}