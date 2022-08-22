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

  getExchangeRate(){
    return this.http.get(baseUrl + "/open/currentExchangeRate{RVZG0GHEV2KORLNA,from_symbol,to_symbol}")
  }

  getCurrencyValue(){
   this.getExchangeRate().subscribe(
    success =>{
        console.log(success)
    },
    error =>{
        console.log(error)
    }
   ) 
  }
}