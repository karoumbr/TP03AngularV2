import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TableauComponent } from './tableau/tableau.component';
import { EmployeComponent } from './employe/employe.component';
import { NompersoPipe } from './nomperso.pipe';






@NgModule({
  declarations: [
    AppComponent,
    TableauComponent,
    EmployeComponent,
    NompersoPipe,



  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
