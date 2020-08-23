import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DeliveryCouraselComponent } from './delivery-courasel/delivery-courasel.component';
import { SamaanListComponent } from './samaan-list/samaan-list.component';
import { CustomerRatingComponent } from './customer-rating/customer-rating.component';
import { SamaanFooterComponent } from './samaan-footer/samaan-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DeliveryCouraselComponent,
    SamaanListComponent,
    CustomerRatingComponent,
    SamaanFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
