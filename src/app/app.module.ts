import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './catalogos/components/product-list/product-list.component';
import { ProductCreateComponent } from './catalogos/components/product-create/product-create.component';
import { ProductService } from './catalogos/services/product.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule 
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
