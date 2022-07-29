import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { RegistraionFormComponent } from './registraion-form/registraion-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    RegistraionFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
