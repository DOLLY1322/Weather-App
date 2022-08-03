import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginGuard } from './guards/login.guard';
import { ListCitiesWeatherComponent } from './list-cities-weather/list-cities-weather.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'listCities',component:ListCitiesWeatherComponent,canActivate:[LoginGuard]},
  {path:'dashboard',component:DashboardComponent,canActivate:[LoginGuard]},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  { path: 'about', component: AboutComponent },
  {path: 'aboutUs',component:AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
