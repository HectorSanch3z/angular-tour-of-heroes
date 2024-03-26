import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component'; // <-- NgModel lives here

@NgModule({
  declarations: [AppComponent, MessagesComponent, HeroesComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HeroDetailComponent],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
