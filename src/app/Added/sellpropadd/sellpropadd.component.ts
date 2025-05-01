import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SellsService } from '../../Services/sells.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HomeService } from '../../Services/home.service';
import { lunch } from '../../interfaces/launch';
import { launch } from '../../interfaces/home';

@Component({
  selector: 'app-sellpropadd',
  standalone: true,
  imports: [ReactiveFormsModule , FormsModule],
  templateUrl: './sellpropadd.component.html',
  styleUrl: './sellpropadd.component.css'
})
export class SellpropaddComponent  implements OnInit{
ngOnInit(): void {
  this.GetLanch()
}

  spin=false
  AllLunches!:launch 
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
    Price:new FormControl(null, [Validators.required]),
    Location:new FormControl(null, [Validators.required]),
    NumberOfRooms:new FormControl(null, [Validators.required]),
    Condition:new FormControl('Condition..', [Validators.required]),
    IsAvailable:new FormControl('Avialable', [Validators.required]),
    LaunchId:new FormControl('launch', [Validators.required]),
    ContactNumber:new FormControl('+', [Validators.required]),
  })
  preventPlusDelete(event: KeyboardEvent) {
    const phoneControl = this.AddPropForm.get('ContactNumber');
    if (phoneControl?.value.length <= 1 && (event.key === 'Backspace' || event.key === 'Delete')) {
      event.preventDefault();
    }
  }

  constructor(private _SellsService:SellsService ,private _HomeService:HomeService,
     private _ToastrService:ToastrService , private _Router:Router){}


    AddNow()
    {
      this.spin=true
      //apenForm
      const formData = new FormData();
      formData.append('Title',this.AddPropForm.get('Title')?.value)
      formData.append('Description',this.AddPropForm.get('Description')?.value)
      formData.append('PropertyType',this.AddPropForm.get('PropertyType')?.value)
      formData.append('Price',this.AddPropForm.get('Price')?.value)
      formData.append('Location',this.AddPropForm.get('Location')?.value)
      formData.append('NumberOfRooms',this.AddPropForm.get('NumberOfRooms')?.value)
      formData.append('Condition',this.AddPropForm.get('Condition')?.value)
      formData.append('IsAvailable',this.AddPropForm.get('IsAvailable')?.value)
      formData.append('LaunchId',this.AddPropForm.get('LaunchId')?.value)
      formData.append('ContactNumber',this.AddPropForm.get('ContactNumber')?.value)
      formData.append('Image' , this.files['Image'])
      //end append

      this._SellsService.Add(formData).subscribe({
        next:res=>{
          this._ToastrService.success('house hub' , 'Property Added done')
          this._Router.navigate(['/SellWork'])
          console.log(res);
          this.spin=false
        },
        error:err=>{
          console.log(err);
          this._ToastrService.error('house hub' , 'Faield Added')
          this.spin=false
          this.errMsg=err.error.errors.Image[0]

        }
      })
    }




//#region lanch
    GetLanch()
  {
   this._HomeService.GetAllLaunches().subscribe({
    next:res=>{
      console.log(res)
      this.AllLunches=res;

    },
    error:err=>{
      console.log(err)

    }
   })
  }
  //#endregion
}
