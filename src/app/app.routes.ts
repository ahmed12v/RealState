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

export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full',  },
    {path : 'home' ,component:HomeComponent},
    {path : 'about' ,component:AboutUsComponent},
    {path : 'contactus' ,component:ContactUsComponent},
    {path : 'services' ,component:ServicesComponent},
    {path : 'rent' ,component:RentComponent},
    {path : 'sell' ,component:SellComponent},
    {path : 'invest' ,component:InvesmentComponent},
    {path : 'register' ,component:RegisterComponent},
    {path : 'login' ,component:LoginComponent},
    {path : 'forget' ,component:ForgetComponent},
    {path : 'code' ,component:CodeVerifyComponent},
    {path : '**' ,component:NotfoundComponent},
    
];


