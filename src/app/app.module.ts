import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
