import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {Component} from '@angular/core';

import { AuthService } from './services/auth.service';
import { AppComponent } from './app.component';
import { CostAccountingComponent } from './cost-accounting/cost-accounting.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [

    AppComponent,
     CostAccountingComponent,
     LoginComponent,
    
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
