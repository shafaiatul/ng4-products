import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// Materialize css for ng2
import { MaterializeModule } from "angular2-materialize";
// Components
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductFilterPipe } from './products/pipes/product-filter.pipe';
import { StarComponent } from './products/shared/star/star.component';
// Services
import { ProductService } from './products/services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductFilterPipe,
    StarComponent,
    WelcomeComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'products', component: ProductListComponent},
      {path:'products/:id', component: ProductDetailComponent},
      {path:'welcome', component: WelcomeComponent},
      {path:'', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}

    ]),
    //Materilize css for ng2
    MaterializeModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
