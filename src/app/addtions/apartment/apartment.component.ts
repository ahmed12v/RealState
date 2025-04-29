import { Component, OnInit } from '@angular/core';
import {  get, Root } from '../../interfaces/home';
import { SellsService } from '../../Services/sells.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apartment',
  standalone: true,
  imports: [],
  templateUrl: './apartment.component.html',
  styleUrl: './apartment.component.css'
})
export class ApartmentComponent implements OnInit{

spiner:boolean=false
Apart!:any

ngOnInit(): void {
  
this.GetApartment()

}

constructor(private _SellsService:SellsService ,  private _ActivatedRoute:ActivatedRoute){}
 
GetApartment()
{
  this.spiner=true
  let id : any
  this._ActivatedRoute.params.subscribe({
    next:parameter=>{
      id= parameter ['id']
    }
  })

  this._SellsService.getApartment(id).subscribe({
    next:res=>{
      this.spiner=false
    this.Apart=res
      console.log(res)
    },
    error:er=>{
      console.log(er)
      this.spiner=false
    }
  })

}

}
