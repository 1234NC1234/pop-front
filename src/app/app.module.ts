import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ElementRef } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CommuneGridComponent } from './commune-grid/commune-grid.component';
import { CommuneService } from './commune.service';
import { DebounceInputComponent } from './debounce-input/debounce-input.component';


@NgModule({
  declarations: [
    AppComponent,
    CommuneGridComponent,
    DebounceInputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
    ],
  providers: [
    CommuneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
