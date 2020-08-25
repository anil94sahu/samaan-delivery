import { Component, OnInit } from '@angular/core';
import { GoogleSheetService } from '../services/google-sheet.service';

@Component({
  selector: 'app-samaan-list',
  templateUrl: './samaan-list.component.html',
  styleUrls: ['./samaan-list.component.css']
})
export class SamaanListComponent implements OnInit {
  itemListSheet = [];
  currentSheet = [];
  p = 1;
  query = '';

  constructor(private gsService: GoogleSheetService) { }

  ngOnInit() {
    this.gsService.getItemListSheet()
    .subscribe(((itemListSheet: any) => {
      this.itemListSheet = itemListSheet;
      this.currentSheet = [...this.itemListSheet];
    }
      ), err => {

      });
  }

  searchItem(value: any[], term: string){
    this.p = 1;
    if (term) {
      this.currentSheet = value.filter((x: any) => x['Item Name'].toLowerCase().startsWith(term.toLowerCase()));
    } else {
      this.currentSheet = value;
    }

  }
}
