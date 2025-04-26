import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { RegisterService } from '../../Services/register.service';
import { LoginService } from '../../Services/login.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink , ReactiveFormsModule ,ToastrModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  //#region decalration
    spiner:boolean=false
    errorMsg!:any
    //#endregion
  
    //#region formSign
  
    loginForm:FormGroup=new FormGroup({
      email:new FormControl(null , [Validators.required , Validators.email]),
      password:new FormControl
      (null , [Validators.required , Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/)]),
    })
  
    //#endregion
  
  
    constructor(private _LoginService:LoginService ,private _Router:Router , private _ToastrService:ToastrService){}

    //#region LoginMethod
    LoginNow()
    {
      this.spiner=true
      if(this.loginForm.valid){
        this._LoginService.Login(this.loginForm.value).subscribe({
          next:res=>{
            console.log(res)
            localStorage.setItem('token',res.token)
              this._LoginService.decodToken()
            this._Router.navigate(['/home'])
            this.spiner=false
          },
          error:err=>{
            this.errorMsg=err.error.errors[0].description
            console.log(this.errorMsg)
            this.spiner=false

          }
        })
      }
    }
    //#endregion


}
