import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  { path: '', component: AppComponent, title: 'Home'},
  { path: 'about', component: AboutMeComponent, title: 'About'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
