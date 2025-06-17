import { Component } from '@angular/core';
import { RentService } from '../../Services/rent.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rent-aoart',
  standalone: true,
  imports: [],
  templateUrl: './rent-aoart.component.html',
  styleUrl: './rent-aoart.component.css'
})
export class RentAoartComponent {

spiner:boolean=false
Apart!:any

ngOnInit(): void {
  
this.GetApartment()

}

constructor(private RentService:RentService ,  private _ActivatedRoute:ActivatedRoute){}
 
GetApartment()
{
  this.spiner=true
  let id : any
  this._ActivatedRoute.params.subscribe({
    next:parameter=>{
      id= parameter ['id']
    }
  })

  this.RentService.getApartment(id).subscribe({
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
