import { Component, OnInit, ViewChild } from '@angular/core';
import { CarouselComponent, CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { HomeService } from '../../Services/home.service';
import { launch } from '../../interfaces/home';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-launch-slider',
  standalone: true,
  imports: [CarouselModule ,RouterLink],
  templateUrl: './launch-slider.component.html',
  styleUrl: './launch-slider.component.css'
})
export class LaunchSliderComponent implements OnInit{


  ngOnInit(): void {
    this.GetLanch()
  }

  @ViewChild('owlCarousel', { static: false }) owlCarousel!: CarouselComponent;
    
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 800,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      800: {
        items: 3
      },
    },
    nav: true,
     
  };
 
  goNext() {
    this.owlCarousel.next();
  }
  spineer:boolean=false

AllLunches!:launch;

constructor(private _HomeService:HomeService ,){}

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

}
