import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrendingService } from '../trending.service';
import { Details } from './../details';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  movieDetails:Details={}
  baseUrl:string = this._TrendingService.baseUrl;
  currentId:number = 0;
  mediaType:string = "";
  show = false;
  isLoading:boolean= false;

  constructor(private _ActivatedRoute:ActivatedRoute , private _TrendingService:TrendingService) { }

  getIdFormURL (){
    this.currentId =  this._ActivatedRoute.snapshot.params['id'];
    this.mediaType = this._ActivatedRoute.snapshot.params['mediatype'];
  }

  getTrendingDetails()
  {
    this.isLoading = true;
    this._TrendingService.getTrendingDetails(this.mediaType , this.currentId).subscribe( (data) => {
      this.movieDetails = data;  
      this.isLoading = false;
    })
  }

  ngOnInit(): void {
    this.getIdFormURL();
    this.getTrendingDetails();
  }

}
