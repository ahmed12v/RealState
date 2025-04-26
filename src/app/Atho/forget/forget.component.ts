import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ForgetService } from '../../Services/forget.service';

@Component({
  selector: 'app-forget',
  standalone: true,
  imports: [RouterLink  ,ReactiveFormsModule],
  templateUrl: './forget.component.html',
  styleUrl: './forget.component.css'
})
export class ForgetComponent {
  //#region decalration
   spinner:boolean=false
  //#endregion
  //#region form

  EmailForm:FormGroup = new FormGroup({
    email:new FormControl(null , [Validators.required , Validators.email])

  })
  //#endregion
   
  constructor( private _ForgetService:ForgetService , private _Router:Router){}

  //#region mehoud
sendEmail()
{
  this.spinner=true
  if(this.EmailForm.valid)
  {
 this._ForgetService.emailConfirm(this.EmailForm.value).subscribe({
  next:res=>{
    this.spinner=false
    this._Router.navigate(['/code'])
  },
  error:err=>{
    this.spinner=false
  }
 })
  }
}
  //#endregion
}
