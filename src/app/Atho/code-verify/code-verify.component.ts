import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, Router, RouterLink } from '@angular/router';
import { ForgetService } from '../../Services/forget.service';

@Component({
  selector: 'app-code-verify',
  standalone: true,
  imports: [RouterLink , ReactiveFormsModule],
  templateUrl: './code-verify.component.html',
  styleUrl: './code-verify.component.css'
})
export class CodeVerifyComponent {

  //#region  declaration
  spiner:boolean=false
  //#endregion

  //#region  formReset

  codeForm:FormGroup=new FormGroup({
    code:new FormControl(null ,[Validators.required]),
    email:new FormControl(null , [Validators.required , Validators.email]),
    newPassword:new FormControl
      (null , [Validators.required , Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/)]),
  })

  //#endregion
constructor(private _ForgetService:ForgetService , private _Router:Router){}
  //#region  Method
  SendNewPassword()
  {
    this.spiner=true
    if(this.codeForm.valid)
    {
      this._ForgetService.resetPassword(this.codeForm.value).subscribe({
        next:res=>{
          
          this.spiner=false
          this._Router.navigate(['/login'])
        },
        error:err=>{
         
          this.spiner=false
        }
      })
    }
  }
  //#endregion
}
