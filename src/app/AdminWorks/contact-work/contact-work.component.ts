import { Component, OnInit } from '@angular/core';
import { ContactUsService } from '../../Services/contact-us.service';
import { emp, lead } from '../../interfaces/contact-us';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-work',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-work.component.html',
  styleUrl: './contact-work.component.css'
})
export class ContactWorkComponent implements OnInit{

comeSpinner=false
btnspin=false
empspiner=false
comelead!:lead
empCome!:emp
selectedEmployeeId!: any;


ngOnInit(): void {
  this.tableCome()
  this.employeCome()

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
     
    },
    error:err=>{
      this.comeSpinner=false
      console.log(err);
      

    }
  })
}

employeCome()
{
  this.empspiner=true
  this._ContactUsService.getAllEmp().subscribe({
    next:res=>{
      this.empCome=res
     console.log(res);
     this.empspiner=false
     
    },
    error:err=>{
      this.empspiner=false
      console.log(err);
      

    }
  })
}

AssinedNow(Id: any )
{

  if (!this.selectedEmployeeId) {
    alert('Please select an employee first.');
    return;
  }


  this.btnspin=true
  this._ContactUsService.Assigned(this.selectedEmployeeId,Id).subscribe({
    next:res=>{
      this.btnspin=false
     // console.log(res);
      this._ToastrService.success('house hub' , 'Assigned successfully')
      
    },
    error:err=>{
      this.btnspin=false
      //console.log(err);
      this._ToastrService.error('house hub' , 'Assigned Failed')
      

    }
  })
}

}
