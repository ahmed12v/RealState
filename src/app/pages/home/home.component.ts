import { Component, OnInit } from '@angular/core';
import { filter } from '../../interfaces/home';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HomeService } from '../../Services/home.service';
import { Router, RouterLink } from '@angular/router';
import { LocationPipe } from '../../pipes/location.pipe';
import { LaunchSliderComponent } from '../../addtions/launch-slider/launch-slider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LocationPipe , ReactiveFormsModule ,RouterLink , LaunchSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.GetAllSell();
    this.GetAllRent();
    
  }
  //#region decler

  rentSpin:boolean=false
  SellSpin:boolean=false
  spinerr:boolean=false
  AllSell!:filter;
  AllRent!:filter;
  FilterResponse!:filter;
  
  //#endregion
  //#region form
  FilterForm:FormGroup=new FormGroup({
    propertyType:new FormControl(''),
    numberOfRooms:new FormControl(''),
    location:new FormControl(''),
  })
  //#endregion

  constructor(private _HomeService:HomeService , private _Router:Router){}
  //#region method
  //#region  postdata
  PostFilter()
  {
    this.spinerr=true
    if(this.FilterForm.valid)
    {
      this._HomeService.Filter(this.FilterForm.value).subscribe({
        next:res=>{
          console.log(res)
          this._Router.navigate(['/filter'])
          this.spinerr=false

        },
        error:err=>{
          console.log(err)
          this.spinerr=false


        }
      })
    }
  }
  //#endregion
  
  //#region getDataToFilter
  GetAllSell()
  {
    this.SellSpin=true
    this._HomeService.AllSell().subscribe({
      next:res=>{
        this.AllSell=res
        this.SellSpin=false
      },
      error:err=>{
          console.log(err);
          this.SellSpin=false

          
      }
    })
  }
//
  GetAllRent()
  {
    this.rentSpin=true
    this._HomeService.AllRent().subscribe({
      next:res=>{
        this.AllRent=res
        this.rentSpin=false

      },
      error:err=>{
          console.log(err);
          this.rentSpin=false

          
      }
    })
  }
//#endregion

 //#region getDataTolanches
 GetLanch()
 {

 }
 //#endregion
 //#endregion

 
}
