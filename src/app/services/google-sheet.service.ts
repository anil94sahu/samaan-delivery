import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleSheetService {

  //https://docs.google.com/spreadsheets/d/e/2PACX-1vTTqgQBNNhYJDtNnkALP7x2OFr5-t-3raRsWe1nL-MG2QJQDUYA3MzhXEGbbZrpXVJg6neDQEWHzbtD/pubhtml
  // sheedID = '2PACX-1vTTqgQBNNhYJDtNnkALP7x2OFr5-t-3raRsWe1nL-MG2QJQDUYA3MzhXEGbbZrpXVJg6neDQEWHzbtD';
  url = `https://sheet.best/api/sheets/8e7aae91-bfeb-417d-9503-83e81a8c123f`;

  constructor(private http: HttpClient) {

  }

  getItemListSheet() {
    return this.http.get(this.url);
  }
}
