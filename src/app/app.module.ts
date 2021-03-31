import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SplashComponent } from './Component/splash/splash.component';
import { CarruselComponent } from './Component/carrusel/carrusel.component';
import { NavBarComponent } from './Component/nav-bar/nav-bar.component';
import { AdminnavComponent } from './Component/adminnav/adminnav.component';
import { LoginComponent } from './Component/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SplashComponent,
    CarruselComponent,
    AdminnavComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
