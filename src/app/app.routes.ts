import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
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
import { LanchesComponent } from './pages/lanches/lanches.component';
import { ApartmentComponent } from './addtions/apartment/apartment.component';
import { RentComponent } from './pages/rent/rent.component';
import { UsersComponent } from './AdminWorks/users/users.component';
import { ContactWorkComponent } from './AdminWorks/contact-work/contact-work.component';
import { ProperityWorkComponent } from './AdminWorks/properity-work/properity-work.component';
import { LauncesWorkComponent } from './AdminWorks/launces-work/launces-work.component';
import { UpdatelaunchComponent } from './AdminWorks/updates/updatelaunch/updatelaunch.component';
import { LauchComponent } from './AdminWorks/Added/lauch/lauch.component';
import { SellWorkComponent } from './properity/sell-work/sell-work.component';
import { RentWorkComponent } from './properity/rent-work/rent-work.component';
import { SellpropaddComponent } from './Added/sellpropadd/sellpropadd.component';
import { RentpropaddComponent } from './Added/rentpropadd/rentpropadd.component';
import { SellpropupComponent } from './updates/sellpropup/sellpropup.component';
import { RentpropupComponent } from './updates/rentpropup/rentpropup.component';

export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full',  },
    //user
    {path : 'home' ,component:HomeComponent , canActivate:[athoGuard]},
    {path : 'about' ,component:AboutUsComponent , canActivate:[athoGuard]},
    {path : 'contactus' ,component:ContactUsComponent ,canActivate:[athoGuard]},
    {path : 'services' ,component:ServicesComponent , canActivate:[athoGuard]},
    {path : 'sell' ,component:SellComponent ,canActivate:[athoGuard]},
    {path : 'rent' ,component:RentComponent ,canActivate:[athoGuard]},
    {path : 'invest' ,component:InvesmentComponent , canActivate:[athoGuard]},
    {path : 'lanches/:id' ,component:LanchesComponent , canActivate:[athoGuard]},
    {path : 'apart/:id' ,component:ApartmentComponent , canActivate:[athoGuard]},

    ///roles
    {path : 'emp' ,component:EmployeComponent ,canActivate:[athoGuard]},
    {path : 'admin' ,component:AdminComponent ,canActivate:[athoGuard]},

    //Admin user
    {path : 'UesrWork' ,component:UsersComponent ,canActivate:[athoGuard]},
    {path : 'ContactWork' ,component:ContactWorkComponent ,canActivate:[athoGuard]},

    //Admin lunch
    {path : 'Updatelauch/:id' ,component:UpdatelaunchComponent ,canActivate:[athoGuard]},
    {path : 'LaunchWork' ,component:LauncesWorkComponent ,canActivate:[athoGuard]},
    {path : 'addlanch' ,component: LauchComponent,canActivate:[athoGuard]},

    //////Admin prop
    {path : 'ProperWork' ,component:ProperityWorkComponent ,canActivate:[athoGuard]},
    {path : 'SellWork' ,component:SellWorkComponent ,canActivate:[athoGuard]},
    {path : 'RentWork' ,component:RentWorkComponent ,canActivate:[athoGuard]},
    {path : 'addpropsell' ,component:SellpropaddComponent ,canActivate:[athoGuard]},
    {path : 'addproprent' ,component:RentpropaddComponent ,canActivate:[athoGuard]},
    {path : 'Uppropsell/:id' ,component:SellpropupComponent ,canActivate:[athoGuard]},
    {path : 'Upproprent/:id' ,component:RentpropupComponent ,canActivate:[athoGuard]},

    /////////Atho
    {path : 'register' ,component:RegisterComponent},
    {path : 'login' ,component:LoginComponent},
    {path : 'forget' ,component:ForgetComponent},
    {path : 'code' ,component:CodeVerifyComponent},
    {path : '**' ,component:NotfoundComponent},
    
];


