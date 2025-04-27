import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { RentComponent } from './pages/rent/rent.component';
import { SellComponent } from './pages/sell/sell.component';
import { InvesmentComponent } from './pages/invesment/invesment.component';
import { RegisterComponent } from './Atho/register/register.component';
import { LoginComponent } from './Atho/login/login.component';
import { ForgetComponent } from './Atho/forget/forget.component';
import { CodeVerifyComponent } from './Atho/code-verify/code-verify.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ServicesComponent } from './pages/services/services.component';
import { athoGuard } from './atho.guard';
import { EmployeComponent } from './core/employe/employe.component';
import { AdminComponent } from './core/admin/admin.component';

export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full',  },
    {path : 'home' ,component:HomeComponent , canActivate:[athoGuard]},
    {path : 'about' ,component:AboutUsComponent , canActivate:[athoGuard]},
    {path : 'contactus' ,component:ContactUsComponent ,canActivate:[athoGuard]},
    {path : 'services' ,component:ServicesComponent , canActivate:[athoGuard]},
    {path : 'rent' ,component:RentComponent , canActivate:[athoGuard]},
    {path : 'sell' ,component:SellComponent ,canActivate:[athoGuard]},
    {path : 'emp' ,component:EmployeComponent ,canActivate:[athoGuard]},
    {path : 'admin' ,component:AdminComponent ,canActivate:[athoGuard]},
    {path : 'invest' ,component:InvesmentComponent , canActivate:[athoGuard]},
    {path : 'register' ,component:RegisterComponent},
    {path : 'login' ,component:LoginComponent},
    {path : 'forget' ,component:ForgetComponent},
    {path : 'code' ,component:CodeVerifyComponent},
    {path : '**' ,component:NotfoundComponent},
    
];


