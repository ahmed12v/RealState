import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { filter } from '../../interfaces/home';
import { HomeService } from '../../Services/home.service';
import { SellsService } from '../../Services/sells.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sell-work',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sell-work.component.html',
  styleUrl: './sell-work.component.css'
})
export class SellWorkComponent implements OnInit{

ngOnInit(): void {
  this.GetAllSellProperity()
}

  spineer=false
  AllSellTable!:filter

  constructor(
            private _HomeService:HomeService,
            private _SellsService:SellsService,
            private _ToastrService:ToastrService
               ){}
  
    GetAllSellProperity()
    {
      this.spineer=true
      this._HomeService.AllSell().subscribe({
        next:res=>{
         // console.log(res)
          this.AllSellTable=res
          this.spineer=false
        },
        error:err=>{
           // console.log(err);
            this.spineer=false
  
            
        }
      })
    }
    
    DeletProp(propId:any)
    {
      this._SellsService.Delet(propId).subscribe({
        next:res=>{
          this._ToastrService.info('house hub' , 'Properity deleted')
          this.GetAllSellProperity()
        },
        error:err=>{
          this._ToastrService.error('house hub' , 'Failed deleted')
        }
      })
    }

}
