import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';
import { Trending } from './../trending';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit {

  pages:number[]=[];
  totalPages:number = 0
  trendingTvShows:Trending[] = [];
  currentPageNumber:number = 0;
  baseUrl:string = this._TrendingService.baseUrl;
  isLoading:boolean= false;

  constructor(private _TrendingService:TrendingService ) { }


  sendPageNumber(pageNum:number)
  {
    this.isLoading = true;
    this.currentPageNumber = pageNum;
    this._TrendingService.getMoviesByPage('tv',pageNum).subscribe({
      next: (response) => 
      {
        this.trendingTvShows=response.results;
        this.totalPages = response.total_pages;
        this.isLoading = false;

        if (this.totalPages >= 1 && this.totalPages >= pageNum) {
          if (pageNum >= this.totalPages)
          {
            this.pages = new Array(6).fill(pageNum > 1 ? pageNum - 1 : (pageNum = 1)).map((x, i) => {
                if (x + i > this.totalPages) {
                  return x - i;
                } else {
                  return x + i;
                }
              });
          } 
          else 
          {            
            this.pages = new Array(6).fill(pageNum > 1 ? pageNum - 1 : (pageNum = 1)).map((x, i) => { 
              return x + i;
              });
          }
        }
        else if (this.totalPages < 6 && this.totalPages > pageNum) 
        {
          this.pages = new Array(this.totalPages).fill(pageNum > 1 ? pageNum - 1 : pageNum).map((x, i) => x + i);
        }
      }
      })
  }
  

  nextPage()
  {
    if(this.currentPageNumber == this.totalPages) 
    {
      this.sendPageNumber(this.totalPages)
    }
    else
    {
      this.sendPageNumber(++this.currentPageNumber)
    }
  }

  PreviousPage()
  {
    if(this.currentPageNumber == 1) 
    {
      this.sendPageNumber(1)
    }
    else
    {
      this.sendPageNumber(--this.currentPageNumber)
    }
  }


  ngOnInit(): void {
    this.sendPageNumber(1)
  }

}
