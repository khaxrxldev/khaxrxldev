import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './pages/blank/blank.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DatePipe } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
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
