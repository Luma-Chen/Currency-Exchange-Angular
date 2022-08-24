import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

const baseUrl = "https://api-brl-exchange.actionlabs.com.br/api/1.0";

@Injectable({
  providedIn: 'root'
})

export class ApisService {
  constructor(
    private http: HttpClient
  ) {}

  getExchangeRate(fromSymbol:string){
    return this.http.get(baseUrl + "/open/currentExchangeRate?apiKey=RVZG0GHEV2KORLNA&from_symbol=" + fromSymbol + "&to_symbol=BRL");
  }

  getCurrencyValue(fromSymbol:string){
   this.getExchangeRate(fromSymbol).subscribe(
    success =>{
        console.log(success)
    },
    error =>{
        console.log(error)
    }
   ) 
  }
}