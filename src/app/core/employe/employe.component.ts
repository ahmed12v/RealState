import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { ContactUsService } from '../../Services/contact-us.service';
import { ToastrService } from 'ngx-toastr';
import { lead } from '../../interfaces/contact-us';

@Component({
  selector: 'app-employe',
  standalone: true,
  imports: [],
  templateUrl: './employe.component.html',
  styleUrl: './employe.component.css'
})
export class EmployeComponent {

  comelead!:lead
  comeSpinner: boolean =false;
  empyty:boolean=false
  
  
  
  ngOnInit(): void {
    this.tableCome()
  
  }
  
  constructor(private _ContactUsService:ContactUsService , private _ToastrService:ToastrService ){}
  
  tableCome()
  {
    this.comeSpinner=true
    this._ContactUsService.getToAdmin().subscribe({
      next:res=>{
        this.comelead=res
       console.log(res);
       this.comeSpinner=false
       if(res.length === 0){
        this.empyty= true
       }
       
      },
      error:err=>{
        this.comeSpinner=false
        console.log(err);
        
  
      }
    })
  }

  spin=false

  markDone(contId:any)
  {
      this.spin=true
      this._ContactUsService.markDone(contId).subscribe({
        next:res=>{
          this.spin=false
          this.tableCome()
        },
        error:err=>{
          this.spin=false
         
        }
      })
  }
  

}
