import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './components/view/view.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';
import { ViewAddComponent } from './components/view-add/view-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    ViewDetailsComponent,
    ViewAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
