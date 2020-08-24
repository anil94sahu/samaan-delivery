import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DeliveryCouraselComponent } from './delivery-courasel/delivery-courasel.component';
import { SamaanListComponent } from './samaan-list/samaan-list.component';
import { CustomerRatingComponent } from './customer-rating/customer-rating.component';
import { SamaanFooterComponent } from './samaan-footer/samaan-footer.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { FilterPipe } from './services/filter.pipe';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DeliveryCouraselComponent,
    SamaanListComponent,
    CustomerRatingComponent,
    SamaanFooterComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
