import { Component, OnInit } from '@angular/core';
import { RentService } from '../../Services/rent.service';
import { ToastrService } from 'ngx-toastr';
import { filter } from '../../interfaces/home';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rent-work',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './rent-work.component.html',
  styleUrl: './rent-work.component.css'
})
export class RentWorkComponent implements OnInit{

ngOnInit(): void {
  this.GetAllRentProperity()
}

  spineer=false
  AllRentTable!:filter

  constructor(
            private RentService:RentService,
            private _ToastrService:ToastrService
               ){}
  
    GetAllRentProperity()
    {
      this.spineer=true
      this.RentService.AllRent().subscribe({
        next:res=>{
          //console.log(res)
          this.AllRentTable=res
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
      this.RentService.Delet(propId).subscribe({
        next:res=>{
          this._ToastrService.info('house hub' , 'Properity deleted')
          this.GetAllRentProperity()
        },
        error:err=>{
          this._ToastrService.error('house hub' , 'Failed deleted')
        }
      })
    }


}
