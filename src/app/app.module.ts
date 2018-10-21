import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';

import { MessageComponent } from './components/chat/message/message.component';
import { HttpClientModule } from '@angular/common/http';
import { GooglePlacesService } from './services/google-places.service';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MessageComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    GooglePlacesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
