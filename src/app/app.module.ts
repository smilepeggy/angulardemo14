import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// 引入http 需要用到jsonp再引入
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PcontentComponent } from './components/pcontent/pcontent.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PcontentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
