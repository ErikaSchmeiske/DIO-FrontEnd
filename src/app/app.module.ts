import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './component/shared/header/header.component';
import { NavComponent } from './component/shared/nav/nav.component';
import { BookstoreAppComponent } from './component/bookstore-app/bookstore-app.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { FiltrosComponent } from './component/filtros/filtros.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductItemComponent } from './component/product-list/product-item/product-item.component';
import { BookService } from './component/product-list/product-item/product-list-component-service';

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    NavComponent,
    BookstoreAppComponent,
    FooterComponent,
    FiltrosComponent,
    ProductListComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
