import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactUsService } from '../../Services/contact-us.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  //#region declartion
  spiner:boolean=false 
  //#endregion

  //#region form
  ContactForm:FormGroup =new FormGroup({
    email:new FormControl(null , [Validators.required , Validators.email]),
    name:new FormControl(null , [Validators.required , Validators.minLength(2)]),
    phone:new FormControl( '+' , [Validators.required , Validators.pattern(/^\+[0-9]{8,15}$/)]),
    message:new FormControl(null , [Validators.required , Validators.minLength(3)]),
  })

  preventPlusDelete(event: KeyboardEvent) {
    const phoneControl = this.ContactForm.get('phone');
    if (phoneControl?.value.length <= 1 && (event.key === 'Backspace' || event.key === 'Delete')) {
      event.preventDefault();
    }
  }

//#endregion

constructor(private _ContactUsService: ContactUsService , private _Router:Router , private _ToastrService:ToastrService){}

//#region  method
SendContact()
{
  this.spiner=true
  if(this.ContactForm.valid){
    this._ContactUsService.SendContact(this.ContactForm.value).subscribe({
      next:res=>{
       // console.log(res)
        this._ToastrService.success( 'house hub ','Thanks For Your Feedback' ,)
        this.spiner=false
        this.ContactForm.reset()
      },
      error:err=>{
       // console.log(err)
        this._ToastrService.error('House Hub','feiled Send' )
        this.spiner=false
      }

    })
  }
}

}
