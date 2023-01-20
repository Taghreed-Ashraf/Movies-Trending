import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  baseUrl:string = 'https://image.tmdb.org/t/p/original'

  constructor(private http:HttpClient) { }

  getTrending(mediaType:string):Observable<any>
  {
    return this.http.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=d5547c716b4941d289c01aa48f690c5b`)
    
  }

  getTrendingDetails(mediaType:string,id:number):Observable<any>
  {
    return this.http.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=d5547c716b4941d289c01aa48f690c5b&language=en-US`)
  }

  // movie & tv
  getMoviesByPage(mediaType:string , pageNumber:number):Observable<any>
  {
    return this.http.get(`https://api.themoviedb.org/3/discover/${mediaType}?api_key=d5547c716b4941d289c01aa48f690c5b&page=${pageNumber}`)
  }


  getPersonByPage(pageNumber:number):Observable<any>
  {
    return this.http.get(`https://api.themoviedb.org/3/person/popular?api_key=d5547c716b4941d289c01aa48f690c5b&language=en-US&page=${pageNumber}`)
  }


  getSearch(word:string):Observable<any>
  {
    return this.http.get(`https://api.themoviedb.org/3/search/multi?api_key=d5547c716b4941d289c01aa48f690c5b&language=en-US&query=${word}&page=1&include_adult=false`)
  }
}
