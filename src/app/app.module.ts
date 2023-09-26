import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from "@angular/forms";
import { ExampleDirective } from './directive/example.directive';
import { CustomifDirective } from './directive/customif.directive';
import { CustomforDirective } from './directive/customfor.directive';
import { CustomForArrayDirective } from './directive/custom-for-array.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExampleDirective,
        CustomifDirective,
        CustomforDirective,
        CustomForArrayDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
