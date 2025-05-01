import { Component, OnInit } from '@angular/core';
import { launch } from '../../interfaces/home';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SellsService } from '../../Services/sells.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../../Services/home.service';

@Component({
  selector: 'app-sellpropup',
  standalone: true,
  imports: [ReactiveFormsModule , FormsModule],
  templateUrl: './sellpropup.component.html',
  styleUrl: './sellpropup.component.css'
})
export class SellpropupComponent implements OnInit{
  ngOnInit(): void {
    this.GetLanch()
  }
  
    spin=false
    AllLunches!:launch 
  
    Image!: File;
    files: Record<string, File> = {};
    
    onFileChange(event: any, type: string) {
      const file = event.target.files[0];
      if (file) {
        this.files[type] = file;
      }
    }
   
      UpdatePropForm:FormGroup=new FormGroup({
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
      const phoneControl = this.UpdatePropForm.get('ContactNumber');
      if (phoneControl?.value.length <= 1 && (event.key === 'Backspace' || event.key === 'Delete')) {
        event.preventDefault();
      }
    }
  
    constructor(private _SellsService:SellsService ,private _HomeService:HomeService,
       private _ToastrService:ToastrService , private _Router:Router , private _ActivatedRoute:ActivatedRoute){}
  
  
      UPdateNow()
      {
      
        this.spin=true

        let id :any ;
        this._ActivatedRoute.params.subscribe({
       next:parameter=>{
        id = parameter['id'];
        
        //apenForm
        const formData = new FormData();
        formData.append('Title',this.UpdatePropForm.get('Title')?.value)
        formData.append('Description',this.UpdatePropForm.get('Description')?.value)
        formData.append('PropertyType',this.UpdatePropForm.get('PropertyType')?.value)
        formData.append('Price',this.UpdatePropForm.get('Price')?.value)
        formData.append('Location',this.UpdatePropForm.get('Location')?.value)
        formData.append('NumberOfRooms',this.UpdatePropForm.get('NumberOfRooms')?.value)
        formData.append('Condition',this.UpdatePropForm.get('Condition')?.value)
        formData.append('IsAvailable',this.UpdatePropForm.get('IsAvailable')?.value)
        formData.append('LaunchId',this.UpdatePropForm.get('LaunchId')?.value)
        formData.append('ContactNumber',this.UpdatePropForm.get('ContactNumber')?.value)
        formData.append('Image' , this.files['Image'])
        //end append
  
        this._SellsService.Update(id,formData).subscribe({
          next:res=>{
            this._ToastrService.success('house hub' , 'Property Updated done')
            this._Router.navigate(['/SellWork'])
            console.log(res);
            this.spin=false
          },
          error:err=>{
            console.log(err);
            this._ToastrService.error('house hub' , 'Faield Updated')
            this.spin=false
          }
        })
      }
      });
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
