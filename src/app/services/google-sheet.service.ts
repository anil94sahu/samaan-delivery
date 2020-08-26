import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleSheetService {

  //https://docs.google.com/spreadsheets/d/e/2PACX-1vTTqgQBNNhYJDtNnkALP7x2OFr5-t-3raRsWe1nL-MG2QJQDUYA3MzhXEGbbZrpXVJg6neDQEWHzbtD/pubhtml
  // sheedID = '2PACX-1vTTqgQBNNhYJDtNnkALP7x2OFr5-t-3raRsWe1nL-MG2QJQDUYA3MzhXEGbbZrpXVJg6neDQEWHzbtD';
  url = `https://sheetdb.io/api/v1/lzzl55j6l7va5`;

  constructor(private http: HttpClient) {

  }

  getItemListSheet() {
    return this.http.get(this.url);
  }
}
