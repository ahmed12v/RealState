import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeService } from '../../Services/home.service';
import { launch } from '../../interfaces/home';
import { LanchWorkService } from '../../Services/lanch-work.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-launces-work',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './launces-work.component.html',
  styleUrl: './launces-work.component.css'
})
export class LauncesWorkComponent implements OnInit{
  ngOnInit(): void {
    this.GetLanch()
  }

spineer:boolean=false

AllLunches!:launch;

constructor(private _HomeService:HomeService ,private _LanchWorkService:LanchWorkService , private _ToastrService:ToastrService){}

  GetLanch()
  {
    this.spineer=true
   this._HomeService.GetAllLaunches().subscribe({
    next:res=>{
      console.log(res)
      this.AllLunches=res;
      this.spineer=false

    },
    error:err=>{
      console.log(err)
      this.spineer=false

    }
   })
  }

  DeleteLanch(lanchid:any)
  {
    this._LanchWorkService.DeletLanch(lanchid).subscribe({
      next:res=>{
       // console.log(res);
        this.GetLanch()
        this._ToastrService.info('house hub' , 'deleted')
      },
      error:err=>{
       // console.log(err)
        this._ToastrService.error('house hub',' erorr ')

      }
    })
  }

}
