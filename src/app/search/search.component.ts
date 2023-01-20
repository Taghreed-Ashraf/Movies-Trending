import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';
import { Trending } from './../trending';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  allTrending:Trending[] = [];
  keword:string = "";
  baseUrl:string = this._TrendingService.baseUrl;
  isLoading:boolean= false;

  constructor(private _TrendingService:TrendingService) { }

  getSearch(word:any)
  {
    this.isLoading = true;
    this.keword = word.data
    this._TrendingService.getSearch(this.keword).subscribe({
      next: (response) => 
      {
        this.allTrending = response.results
        this.isLoading = false;
      }
    })
  }


  

  ngOnInit(): void {
  }

}
