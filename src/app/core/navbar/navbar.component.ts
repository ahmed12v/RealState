import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  logingUser:boolean=false;
  logingAdmin:boolean=false;
  sidebarOpen!: boolean;

constructor(private _router:Router ,){}
   
   toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
}

closeSidebar() {
    this.sidebarOpen = false;
}
 ngOnInit(): void {
   
//this._LogInService.UserDataAfterDecoded.subscribe(
   
//   (log)=>{ 
//        if(this._LogInService.UserDataAfterDecoded.getValue()!=null){
        
//         // const role = localStorage.getItem('role')
//         // if(role === 'admin'){
//         //    this.logingAdmin=true
//         //    this.logingUser=false
//         // }
//         // if(role ==='user'){
//         //   this.logingAdmin=false
//         //   this.logingUser=true
//         // }
        
//         this.logingUser=true
//         // this._ToastrService.info('Savior', 'Welcome In Your Savior')
//        }else{
//         this.logingUser=false
//         // this.logingAdmin=false
//        }
       
//   }
  
// )

//  }

  // logOut(){

  //   localStorage.removeItem('token');
  //  // localStorage.removeItem('role');
  //   this._LogInService.UserDataAfterDecoded.next(null);
  //   this._router.navigate(['/login'])
  //   this._ToastrService.info('bye bye', ' We hope you had a helpful experience and enjoyed it ')

}


}
