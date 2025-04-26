import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideToastr, ToastrModule } from 'ngx-toastr';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),  provideToastr(),
    provideClientHydration(),provideAnimations(), provideClientHydration(),provideHttpClient(withFetch()),
   importProvidersFrom(RouterModule,BrowserAnimationsModule,ToastrModule.forRoot({positionClass:'Toaster-position'}),),
 ]
};
