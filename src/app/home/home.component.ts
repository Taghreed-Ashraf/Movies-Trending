import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Trending } from './../trending';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _TrendingService:TrendingService) { }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    margin:10,
    autoplay : true,
    autoplayTimeout : 1500 ,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 10
      }
    },
    nav: true
  }


  moviesList:Trending[]=[]
  tvShowsList:Trending[]=[]
  peopleList:Trending[]=[]
  baseUrl:string = this._TrendingService.baseUrl;
  isLoading:boolean= false;


  getTrending()
  {
    this.isLoading= true;
    this._TrendingService.getTrending('movie').subscribe({
      next: (response) => 
      {
        // console.log(response.results);
        this.moviesList = response.results.splice(0,10);
        console.log(this.moviesList);
        this.isLoading= false;
      },
      complete: () =>
      {
        this._TrendingService.getTrending('tv').subscribe({
          next: (response) => 
          {
            this.tvShowsList = response.results.splice(0,10);
            this.isLoading= false;
          },
          complete: () =>
          {
            this._TrendingService.getTrending('person').subscribe({
              next : (response) => 
              {
                this.peopleList = response.results.splice(0,10);
                this.isLoading= false;
              }
            })
          }
        })
      }
    })
  }

  ngOnInit(): void {
    this.getTrending();
  }

}
