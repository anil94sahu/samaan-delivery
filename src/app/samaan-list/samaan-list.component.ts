import { Component, OnInit } from '@angular/core';
import { GoogleSheetService } from '../services/google-sheet.service';

@Component({
  selector: 'app-samaan-list',
  templateUrl: './samaan-list.component.html',
  styleUrls: ['./samaan-list.component.css']
})
export class SamaanListComponent implements OnInit {
  itemListSheet = [];
  query = '';

  constructor(private gsService: GoogleSheetService) { }

  ngOnInit() {
    this.gsService.getItemListSheet()
    .subscribe(((itemListSheet: any) => {
      this.itemListSheet = itemListSheet;
    }
      ), err => {

      });
  }

}
