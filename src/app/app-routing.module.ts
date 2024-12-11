import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './pages/blank/blank.component';
import { DatePipe } from '@angular/common';
import { WeatherComponent } from './pages/weather/weather.component';

const routes: Routes = [
  {
    path: '',
    component: WeatherComponent
  }, {
    path: 'blank',
    component: BlankComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  providers: [DatePipe],
  exports: [RouterModule]
})
export class AppRoutingModule { }
