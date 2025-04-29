import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/navbar/navbar.component';
import { ToastrModule } from 'ngx-toastr';
import { isPlatformBrowser } from '@angular/common';
import { FooterComponent } from './pages/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , NavbarComponent , FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private _Router:Router ,  @Inject(PLATFORM_ID) private platformId: Object){}

  ngOnInit(): void {
  
    if (isPlatformBrowser(this.platformId)) {
      this._Router.events.subscribe((event =>{
        if(event instanceof NavigationEnd ){
          localStorage.setItem('lastVisitedPage', event.urlAfterRedirects);
        }
       }));
    
       const lastVisitedPage = localStorage.getItem('lastVisitedPage');
        if (lastVisitedPage) {
          this._Router.navigateByUrl(lastVisitedPage);
        } else {
    
          this._Router.navigate(['/login']);
        } 
    
    }
}

}
