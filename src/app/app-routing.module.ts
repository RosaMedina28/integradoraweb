import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminnavComponent } from './Component/adminnav/adminnav.component';
import { CarruselComponent } from './Component/carrusel/carrusel.component';
import { LoginComponent } from './Component/login/login.component';
import { RegistroComponent } from './Component/registro/registro.component';
import { NavBarComponent} from './Component/nav-bar/nav-bar.component';
import { Error404Component } from './Component/error404/error404.component'

const routes: Routes = [
  
    {path:'navbar', component:NavBarComponent},
    {path:'carrusel', component:CarruselComponent},
    {path:'navadmin', component:AdminnavComponent},
    {path:'login', component:LoginComponent, pathMatch: 'full'},
    {path:'registro', component:RegistroComponent},
    {path:'**',component:Error404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
