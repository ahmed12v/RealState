import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaunchService } from '../../Services/launch.service';

@Component({
  selector: 'app-lanches',
  standalone: true,
  imports: [],
  templateUrl: './lanches.component.html',
  styleUrl: './lanches.component.css'
})
export class LanchesComponent implements OnInit{
  ngOnInit(): void {
    this.GetlanchById()
  }

  spinner:boolean=false 
  Launch!:any

 constructor(private _ActivatedRoute:ActivatedRoute , private _LaunchService:LaunchService){}

 GetlanchById(){

  let id : any
  this._ActivatedRoute.params.subscribe({
    next:parameter=>{
      id= parameter ['id']
    }
  })

  this.spinner=true
  this._LaunchService.lachById(id).subscribe({
    next:res=>{
      this.Launch=res
      this.spinner=false
      console.log(res)

    },error:err=>{
      console.log(err);
      this.spinner=false
      
    }
  })

 }


}
