import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routedComponents, AppRoutingModule } from './app-routing.module';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { DalleComponent } from './dalle/dalle.component';
import { CdalleVarComponent } from './cdalle-var/cdalle-var.component';
import { WhisperComponent } from './whisper/whisper.component';



@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
    CustomerSupportComponent,
    DalleComponent,
    CdalleVarComponent,
    WhisperComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
