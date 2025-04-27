import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  logingUser: boolean = false;
  logingAdmin: boolean = false;
  logingEmployee: boolean = false;
  sidebarOpen!: boolean;

  constructor(private _router: Router, private _LoginService: LoginService) { }

  ngOnInit(): void {
    this._LoginService.UserDataAfterDecoded.subscribe((decodedToken) => {
      if (decodedToken) {
        const roles = decodedToken.roles || decodedToken.role || []; 
        this.logingAdmin = roles.includes('Admin');
        this.logingEmployee = roles.includes('Employee');
        this.logingUser = roles.includes('Member');
      } else {
        this.logingAdmin = false;
        this.logingEmployee = false;
        this.logingUser = false;
      }
    });
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar() {
    this.sidebarOpen = false;
  }

 
  logOut() {
    localStorage.removeItem('token');  
    this._LoginService.UserDataAfterDecoded.next(null); 
    this._router.navigate(['/login']);  
  }
}
