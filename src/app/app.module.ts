import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
import { AppComponent } from './app.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
// import { MultiplicationComponent } from './multiplication/multiplication.component';
 
@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
})
export class AppModule { }