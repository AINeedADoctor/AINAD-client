import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MzInputModule } from 'ngx-materialize'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';

import { MzCardModule } from 'ngx-materialize'
import { MzButtonModule } from 'ngx-materialize'


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MzCardModule,
    MzInputModule,
    MzButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
