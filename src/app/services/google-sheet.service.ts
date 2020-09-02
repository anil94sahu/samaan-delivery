import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleSheetService {

  //https://docs.google.com/spreadsheets/d/e/2PACX-1vTTqgQBNNhYJDtNnkALP7x2OFr5-t-3raRsWe1nL-MG2QJQDUYA3MzhXEGbbZrpXVJg6neDQEWHzbtD/pubhtml
  // sheedID = '2PACX-1vTTqgQBNNhYJDtNnkALP7x2OFr5-t-3raRsWe1nL-MG2QJQDUYA3MzhXEGbbZrpXVJg6neDQEWHzbtD';
  // https://sheetdb.io/billing
  url = `https://sheetdb.io/api/v1/irw4p9701my8b`;
  distributorUrl = `https://sheetdb.io/api/v1/p52y5n1ch12h3`;

  constructor(private http: HttpClient) {

  }

  getItemListSheet() {
    return this.http.get(this.url);
  }

  getDistributorListSheet() {
    return this.http.get(this.distributorUrl);
  }
}
