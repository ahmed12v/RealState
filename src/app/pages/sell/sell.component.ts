import { RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../Services/home.service';
import { filter } from '../../interfaces/home';

@Component({
  selector: 'app-sell',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sell.component.html',
  styleUrl: './sell.component.css'
})
export class SellComponent implements OnInit{
  
  ngOnInit(): void {
    this.GetAllSell()
  }

  SellSpin:boolean=false
  AllSell!:filter;
  constructor(
          private _HomeService:HomeService
             ){}

  GetAllSell()
  {
    this.SellSpin=true
    this._HomeService.AllSell().subscribe({
      next:res=>{
        console.log(res)
        this.AllSell=res
        this.SellSpin=false
      },
      error:err=>{
          console.log(err);
          this.SellSpin=false

          
      }
    })
  }

}
