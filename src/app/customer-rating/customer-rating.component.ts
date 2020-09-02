import { GoogleSheetService } from './../services/google-sheet.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-rating',
  templateUrl: './customer-rating.component.html',
  styleUrls: ['./customer-rating.component.css']
})
export class CustomerRatingComponent implements OnInit {

  constructor(private gsService: GoogleSheetService) { }
  distributorSheet = [];

  ngOnInit() {
    this.getDistributorListSheet();
  }

  getDistributorListSheet(){
    this.gsService.getDistributorListSheet()
    .subscribe(((sheet: any) => {
      this.distributorSheet = sheet;
      // this.currentSheet = [...this.itemListSheet];
    }
      ), err => {
      });
  }

}
