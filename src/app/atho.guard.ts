import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './Services/login.service';
import { inject } from '@angular/core';

export const athoGuard: CanActivateFn = (route, state) => {

  let _login:LoginService =inject(LoginService)
  let _router:Router=inject(Router)
  if(_login.UserDataAfterDecoded.getValue()!=null){
   return true;
  }
 _router.navigate(['/login'])
   return false ;
 

};
