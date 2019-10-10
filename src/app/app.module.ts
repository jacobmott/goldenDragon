import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoardComponent } from './hoard/hoard.component';
import { HttpClientModule } from '@angular/common/http';
import { ChestComponent } from './chest/chest.component';
import { MatSliderModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 


@NgModule({
  declarations: [
    AppComponent,
    HoardComponent,
    ChestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSliderModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    ChestComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
