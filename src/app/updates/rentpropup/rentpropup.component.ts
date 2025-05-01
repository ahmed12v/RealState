import { Component } from '@angular/core';
import { RentService } from '../../Services/rent.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-rentpropup',
  standalone: true,
  imports: [ReactiveFormsModule ,],
  templateUrl: './rentpropup.component.html',
  styleUrl: './rentpropup.component.css'
})
export class RentpropupComponent {

  
      spin=false
      errMsg!:any
      Image!: File;
      files: Record<string, File> = {};
      
      onFileChange(event: any, type: string) {
        const file = event.target.files[0];
        if (file) {
          this.files[type] = file;
        }
      }
     
      AddPropForm:FormGroup=new FormGroup({
        Title:new FormControl(null, [Validators.required]),
        Description:new FormControl(null, [Validators.required]),
        PropertyType:new FormControl('PropertyType', [Validators.required]),
        RentPrice:new FormControl(null, [Validators.required]),
        Location:new FormControl(null, [Validators.required]),
        NumberOfRooms:new FormControl(null, [Validators.required]),
        LeaseStartDate:new FormControl(null, [Validators.required]),
        IsAvailable:new FormControl('Avialable', [Validators.required]),
        LeaseEndDate:new FormControl('', [Validators.required]),
        RentType:new FormControl('', [Validators.required]),
        DepositAmount:new FormControl('', [Validators.required]),
        ContactNumber:new FormControl('+', [Validators.required]),
      })
      preventPlusDelete(event: KeyboardEvent) {
        const phoneControl = this.AddPropForm.get('ContactNumber');
        if (phoneControl?.value.length <= 1 && (event.key === 'Backspace' || event.key === 'Delete')) {
          event.preventDefault();
        }
      }
    
      constructor(private _RentService:RentService,
         private _ToastrService:ToastrService , private _Router:Router , private _ActivatedRoute:ActivatedRoute){}
    
    
        UpdateNow()
        {
          let id :any ;
          this._ActivatedRoute.params.subscribe({
         next:parameter=>{
          id = parameter['id'];
          this.spin=true
          //apenForm
          const formData = new FormData();
          formData.append('Title',this.AddPropForm.get('Title')?.value)
          formData.append('Description',this.AddPropForm.get('Description')?.value)
          formData.append('PropertyType',this.AddPropForm.get('PropertyType')?.value)
          formData.append('RentPrice',this.AddPropForm.get('RentPrice')?.value)
          formData.append('Location',this.AddPropForm.get('Location')?.value)
          formData.append('NumberOfRooms',this.AddPropForm.get('NumberOfRooms')?.value)
          formData.append('LeaseStartDate',this.AddPropForm.get('LeaseStartDate')?.value)
          formData.append('LeaseEndDate',this.AddPropForm.get('LeaseEndDate')?.value)
          formData.append('IsAvailable',this.AddPropForm.get('IsAvailable')?.value)
          formData.append('RentType',this.AddPropForm.get('RentType')?.value)
          formData.append('ContactNumber',this.AddPropForm.get('ContactNumber')?.value)
          formData.append('DepositAmount',this.AddPropForm.get('DepositAmount')?.value)
          formData.append('Image' , this.files['Image'])
          //end append
    
          this._RentService.Update(id,formData).subscribe({
            next:res=>{
              this._ToastrService.success('house hub' , 'Property Added done')
              this._Router.navigate(['/RentWork'])
             // console.log(res);
              this.spin=false
            },
            error:err=>{
            //  console.log(err);
              this._ToastrService.error('house hub' , 'Faield Added')
              this.spin=false
              this.errMsg=err.error.errors.Image[0]
    
            }
          })
        }
      });
    
    }

}
