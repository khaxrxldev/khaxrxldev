import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { BlankComponent } from './pages/blank/blank.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PrayerTimeComponent } from './pages/prayer-time/prayer-time.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    BlankComponent,
    MainPageComponent,
    PrayerTimeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
