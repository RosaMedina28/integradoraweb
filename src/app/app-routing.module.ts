import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarruselComponent } from './Component/carrusel/carrusel.component';

import { NavBarComponent} from './Component/nav-bar/nav-bar.component';

const routes: Routes = [
  
    {path:'navbar', component:NavBarComponent},
    {path:'carrusel', component:CarruselComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
