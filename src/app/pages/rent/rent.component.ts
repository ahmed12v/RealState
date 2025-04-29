import { Component, OnInit } from '@angular/core';
import { Init } from 'v8';
import { HomeService } from '../../Services/home.service';
import { filter } from '../../interfaces/home';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rent',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './rent.component.html',
  styleUrl: './rent.component.css'
})
export class RentComponent implements OnInit{

  ngOnInit(): void {
      this.GetAllSell()
    }
  
    SellSpin:boolean=false
    AllRent!:filter;
    constructor(
            private _HomeService:HomeService
               ){}
  
    GetAllSell()
    {
      this.SellSpin=true
      this._HomeService.AllRent().subscribe({
        next:res=>{
          console.log(res)
          this.AllRent=res
          this.SellSpin=false
        },
        error:err=>{
            console.log(err);
            this.SellSpin=false
  
            
        }
      })
    }

}
