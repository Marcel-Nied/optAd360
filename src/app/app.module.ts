import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { ChartComponent } from 'src/app/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    TableComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatProgressSpinnerModule
  
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
