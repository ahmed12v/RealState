import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { RegisterService } from '../../Services/register.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink , ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  //#region decalration
  spiner:boolean=false
  errorMsg:boolean=false

  //#endregion

  //#region formSign

  RegisterForm:FormGroup=new FormGroup({
    email:new FormControl(null , [Validators.required , Validators.email]),
    password:new FormControl(null , [Validators.required , Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/)]),
    firstName:new FormControl(null , [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    lastName:new FormControl(null , [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    phoneNumber:new FormControl('+' , [Validators.required, Validators.pattern(/^\+[0-9]{8,15}$/)]),
    address : new FormControl(null , [Validators.required , Validators.minLength(3)])
  });

  preventPlusDelete(event: KeyboardEvent) {
    const phoneControl = this.RegisterForm.get('phoneNumber');
    if (phoneControl?.value.length <= 1 && (event.key === 'Backspace' || event.key === 'Delete')) {
      event.preventDefault();
    }
  }
  //#endregion


  constructor(private _RegisterService:RegisterService  ,private _Router:Router){}

  //#region signMethoud
  RegisterNow()
  {
    this.spiner=true
    if(this.RegisterForm.valid){
      this._RegisterService.Register(this.RegisterForm.value).subscribe({
        next:res=>{
        // console.log(res)
          this._Router.navigate(['/login'])
          this.spiner=false
        },
        error:err=>{
         // console.log(err)
          this.spiner=false
          this.errorMsg=true

        }
      })
    }
  }
//#endregion

}






