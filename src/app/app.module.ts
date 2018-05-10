import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ServicesComponentComponent } from './services-component/services-component.component';
import { ProductsComponentComponent } from './products-component/products-component.component';
import { ContactsComponentComponent } from './contacts-component/contacts-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    ServicesComponentComponent,
    ProductsComponentComponent,
    ContactsComponentComponent
  ],
  imports: [
    BrowserModule,
    routing,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
