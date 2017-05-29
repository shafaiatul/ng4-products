import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Materialize css for ng2
import { MaterializeModule } from "angular2-materialize";

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductFilterPipe } from './products/product-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //Materilize css for ng2
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
